
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './GlobeAnimation.css'

export default function GlobeAnimation({
  transparentBackground = false,
}) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let renderer
    let frameId
    let globe
    let resizeObserver

    const scene = new THREE.Scene()

    scene.background = null


    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    camera.position.z = 5.2

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      })
    } catch (error) {
      console.error('WebGL initialization failed:', error)
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.setClearColor(0x000000, 0)
    renderer.toneMappingExposure = 1.15
    mount.appendChild(renderer.domElement)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.position = 'relative'
    renderer.domElement.style.zIndex = '1'

    const group = new THREE.Group()
    scene.add(group)
    globe = group

    // Procedural Earth texture: no external image or API required.
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 512
    const ctx = canvas.getContext('2d')

    const ocean = ctx.createLinearGradient(0, 0, 1024, 512)
    ocean.addColorStop(0, '#123b56')
    ocean.addColorStop(0.5, '#071b32')
    ocean.addColorStop(1, '#0b2944')
    ctx.fillStyle = ocean
    ctx.fillRect(0, 0, 1024, 512)

    // Fine latitude/longitude grid.
    ctx.strokeStyle = 'rgba(0, 184, 169, 0.22)'
    ctx.lineWidth = 1

    for (let x = 0; x <= 1024; x += 64) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 512)
      ctx.stroke()
    }

    for (let y = 32; y < 512; y += 32) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(1024, y)
      ctx.stroke()
    }

    // Stylized land shapes. These are decorative, not geographic data.
    const continents = [
      [[100, 95], [160, 65], [225, 88], [260, 130], [230, 170],
        [190, 190], [175, 245], [135, 215], [115, 165]],
      [[215, 250], [260, 265], [285, 315], [265, 390],
        [230, 435], [205, 360], [190, 300]],
      [[455, 90], [505, 70], [550, 95], [580, 135],
        [550, 175], [505, 165], [475, 130]],
      [[465, 175], [525, 180], [555, 240], [530, 315],
        [490, 365], [460, 300], [440, 230]],
      [[600, 90], [685, 65], [775, 100], [820, 145],
        [785, 190], [715, 175], [680, 220], [625, 165]],
      [[780, 285], [825, 300], [850, 340], [820, 380],
        [790, 355]],
    ]

    continents.forEach((points) => {
      ctx.beginPath()
      points.forEach(([x, y], i) => {
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.closePath()
      ctx.fillStyle = '#17615f'
      ctx.fill()
      ctx.strokeStyle = '#00b8a9'
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Subtle city-light points.
    let seed = 27
    const random = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }

    for (let i = 0; i < 280; i++) {
      const x = random() * 1024
      const y = random() * 512
      const land = continents.some((poly) => {
        const minX = Math.min(...poly.map((p) => p[0]))
        const maxX = Math.max(...poly.map((p) => p[0]))
        const minY = Math.min(...poly.map((p) => p[1]))
        const maxY = Math.max(...poly.map((p) => p[1]))
        return x >= minX && x <= maxX && y >= minY && y <= maxY
      })

      if (!land) continue
      ctx.beginPath()
      ctx.arc(x, y, random() * 1.5 + 0.5, 0, Math.PI * 2)
      ctx.fillStyle = random() > 0.8
        ? 'rgba(244, 183, 64, 0.9)'
        : 'rgba(0, 184, 169, 0.65)'
      ctx.fill()
    }


    const textureLoader = new THREE.TextureLoader()

    const texture = textureLoader.load('/textures/earth-map.jpg')
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy()


    const sphereGeometry = new THREE.SphereGeometry(1.35, 96, 96)
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.82,
      metalness: 0.08,
    })

    const earth = new THREE.Mesh(sphereGeometry, sphereMaterial)
    group.add(earth)

    // Soft teal atmosphere around the Earth.
    const atmosphereGeometry = new THREE.SphereGeometry(1.4, 64, 64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color('#00b8a9') },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          float intensity = pow(
            0.72 - max(dot(normalize(vNormal), normalize(vViewPosition)), 0.0),
            3.0
          );
          gl_FragColor = vec4(glowColor, intensity * 0.65);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    })

    group.add(new THREE.Mesh(atmosphereGeometry, atmosphereMaterial))

    // Lighting: cool blue key light and subtle gold fill.
    scene.add(new THREE.AmbientLight('#6f91b2', 1.5))

    const keyLight = new THREE.DirectionalLight('#b5eaff', 3.2)
    keyLight.position.set(-3, 2, 4)
    scene.add(keyLight)

    const goldLight = new THREE.PointLight('#f4b740', 12, 10)
    goldLight.position.set(3, -1, 2)
    scene.add(goldLight)

    // Fine orbital paths around the globe.
    const orbitMaterial = new THREE.LineBasicMaterial({
      color: '#00b8a9',
      transparent: true,
      opacity: 0.42,
    })

    for (let i = 0; i < 3; i++) {
      const points = []
      const tilt = i * 0.85 - 0.7
      const radius = 1.55 + i * 0.035

      for (let j = 0; j <= 180; j++) {
        const angle = (j / 180) * Math.PI * 2
        points.push(new THREE.Vector3(
          radius * Math.cos(angle),
          radius * Math.sin(angle) * Math.cos(tilt),
          radius * Math.sin(angle) * Math.sin(tilt),
        ))
      }

      const curve = new THREE.BufferGeometry().setFromPoints(points)
      group.add(new THREE.Line(curve, orbitMaterial))
    }

    // Gold and teal connection points.
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: '#00b8a9' })
    const goldNodeMaterial = new THREE.MeshBasicMaterial({ color: '#f4b740' })
    const nodeGeometry = new THREE.SphereGeometry(0.025, 12, 12)

    const nodes = []
    for (let i = 0; i < 14; i++) {
      const latitude = -1.0 + (i / 13) * 2.0
      const longitude = i * 2.399
      const radius = 1.39
      const node = new THREE.Mesh(
        nodeGeometry,
        i % 4 === 0 ? goldNodeMaterial : nodeMaterial,
      )

      node.position.set(
        radius * Math.cos(latitude) * Math.cos(longitude),
        radius * Math.sin(latitude),
        radius * Math.cos(latitude) * Math.sin(longitude),
      )

      group.add(node)
      nodes.push(node)
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    let previousTime = 0

    const animate = (time) => {
      frameId = requestAnimationFrame(animate)

      const delta = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0

      previousTime = time

      if (!reducedMotion.matches) {
        group.rotation.y += delta * 0.075
        group.rotation.x = Math.sin(time * 0.00012) * 0.035

        nodes.forEach((node, i) => {
          const pulse = 0.8 + 0.2 * Math.sin(time * 0.0012 + i)
          node.scale.setScalar(pulse)
        })
      }

        renderer.render(scene, camera)
    }

    const resize = () => {
    const width = mount.clientWidth
    const height = mount.clientHeight

    console.log('Globe resize:', { width, height })

    if (!width || !height) return

    camera.aspect = width / height
    camera.position.z = width < 480 ? 6.4 : width < 768 ? 5.8 : 5.2
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    }

    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)

    animate(0)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver?.disconnect()
      sphereGeometry.dispose()
      sphereMaterial.dispose()
      texture.dispose()
      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()
      orbitMaterial.dispose()
      nodeGeometry.dispose()
      nodeMaterial.dispose()
      goldNodeMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [transparentBackground])

  return (
    <div
        className={`globe-animation ${
            transparentBackground
            ? 'globe-animation--transparent'
            : ''
        }`}
        ref={mountRef}
        aria-hidden="true"
    />
  )
}
