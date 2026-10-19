
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './MarketGlobe.css'

export default function MarketGlobe({ className = '' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let renderer
    let frameId
    let resizeObserver
    let texture

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    camera.position.z = 5.2

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      })
    } catch (error) {
      console.error('Market globe WebGL initialization failed:', error)
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.setClearColor(0x000000, 0)

    mount.appendChild(renderer.domElement)

    Object.assign(renderer.domElement.style, {
      display: 'block',
      width: '100%',
      height: '100%',
    })

    const group = new THREE.Group()
    scene.add(group)

    // Load the market-themed globe texture.
    const textureLoader = new THREE.TextureLoader()

    texture = textureLoader.load(
      '/textures/market-globe-header.jpg',
      undefined,
      (error) => {
        console.error('Market globe texture failed to load:', error)
      },
    )

    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy()

    const sphereGeometry = new THREE.SphereGeometry(1.35, 96, 96)

    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.82,
      metalness: 0.08,
    })

    group.add(new THREE.Mesh(sphereGeometry, sphereMaterial))

    // Teal atmospheric glow.
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
            0.72 - max(
              dot(normalize(vNormal), normalize(vViewPosition)),
              0.0
            ),
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

    group.add(
      new THREE.Mesh(atmosphereGeometry, atmosphereMaterial),
    )

    // Lighting to match the TradingBasics visual identity.
    scene.add(new THREE.AmbientLight('#6f91b2', 1.5))

    const keyLight = new THREE.DirectionalLight('#b5eaff', 3.2)
    keyLight.position.set(-3, 2, 4)
    scene.add(keyLight)

    const goldLight = new THREE.PointLight('#f4b740', 12, 10)
    goldLight.position.set(3, -1, 2)
    scene.add(goldLight)

    // Decorative teal and gold connection nodes.
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: '#00b8a9',
    })

    const goldNodeMaterial = new THREE.MeshBasicMaterial({
      color: '#f4b740',
    })

    const nodeGeometry = new THREE.SphereGeometry(0.025, 12, 12)
    const nodes = []

    for (let i = 0; i < 14; i++) {
      const latitude = -1 + (i / 13) * 2
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
        // Clockwise rotation; no orbital rings.
        group.rotation.y -= delta * 0.075

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

      if (!width || !height) return

      camera.aspect = width / height

      camera.position.z =
        width < 480 ? 6.4 : width < 768 ? 5.8 : 5.2

      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)

    resize()
    animate(0)

    // Clean up resources when the component unmounts.
    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver?.disconnect()

      sphereGeometry.dispose()
      sphereMaterial.dispose()
      texture?.dispose()

      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()

      nodeGeometry.dispose()
      nodeMaterial.dispose()
      goldNodeMaterial.dispose()

      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`market-globe ${className}`.trim()}
      aria-hidden="true"
    />
  )
}
