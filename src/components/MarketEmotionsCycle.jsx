
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import "./MarketEmotionsCycle.css";

const stages = [
  {
    name: "Optimism",
    phase: "THE RECOVERY",
    color: "#00B8A9",
    description:
      "The market begins to improve. Traders see opportunity, but the future is still uncertain.",
    lesson:
      "Build a plan before entering. Define your risk, entry, and exit.",
  },
  {
    name: "Excitement",
    phase: "CONFIDENCE GROWS",
    color: "#3B82F6",
    description:
      "Prices keep rising. Positive results can make traders increasingly confident.",
    lesson:
      "Don't confuse a winning streak with a guaranteed edge.",
  },
  {
    name: "Thrill",
    phase: "RISING EUPHORIA",
    color: "#00B8A9",
    description:
      "The move feels exciting. Traders may increase their position sizes or chase prices.",
    lesson:
      "Keep position sizing consistent with your risk rules.",
  },
  {
    name: "Euphoria",
    phase: "MAXIMUM OVERCONFIDENCE",
    color: "#F4B740",
    description:
      "Confidence can become overconfidence. Risk may feel smaller than it really is.",
    lesson:
      "Avoid impulsive entries. Protect capital instead of chasing more profit.",
  },
  {
    name: "Anxiety",
    phase: "THE TREND WEAKENS",
    color: "#F4B740",
    description:
      "Prices become less predictable. Traders start questioning their decisions.",
    lesson:
      "Return to your trading plan. Don't move stops just to avoid a loss.",
  },
  {
    name: "Fear",
    phase: "RISK BECOMES VISIBLE",
    color: "#F97316",
    description:
      "Falling prices can trigger panic, rushed decisions, and emotional exits.",
    lesson:
      "Use predefined exits. Avoid revenge trading and impulsive decisions.",
  },
  {
    name: "Capitulation",
    phase: "SELLING PRESSURE",
    color: "#EF4444",
    description:
      "Some traders give up and sell under pressure, often after losses have accumulated.",
    lesson:
      "Step back and reassess. A falling market is not automatically a buying signal.",
  },
  {
    name: "Despondency",
    phase: "LOW CONFIDENCE",
    color: "#8B5CF6",
    description:
      "Interest and confidence fade. Traders may feel discouraged after a difficult period.",
    lesson:
      "Review your journal, reduce risk if needed, and wait for evidence.",
  },
  {
    name: "Hope",
    phase: "A NEW CYCLE",
    color: "#3B82F6",
    description:
      "Conditions may begin to stabilize. A new recovery could develop, but confirmation matters.",
    lesson:
      "Look for evidence, not predictions. Let your strategy guide the next trade.",
  },
];


const points = [
  { x: 400, y: 70 },  // Optimism
  { x: 520, y: 105 }, // Excitement
  { x: 590, y: 170 }, // Thrill
  { x: 600, y: 235 }, // Euphoria
  { x: 565, y: 305 }, // Anxiety
  { x: 490, y: 355 }, // Fear
  { x: 390, y: 375 }, // Capitulation
  { x: 285, y: 345 }, // Despondency
  { x: 205, y: 270 }, // Hope
];

const cyclePath =
  "M400 70 " +
  "C465 65 505 82 520 105 " +
  "C565 120 590 145 590 170 " +
  "C625 205 615 220 600 235 " +
  "C600 270 590 290 565 305 " +
  "C545 335 520 350 490 355 " +
  "C450 380 420 382 390 375 " +
  "C345 375 310 365 285 345 " +
  "C235 325 200 300 205 270 " +
  "C190 190 265 80 400 70";


export default function MarketEmotionsCycle() {
  const [activeStage, setActiveStage] = useState(0);
  const [highlightedStage, setHighlightedStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const pathRef = useRef(null);
  const currentLengthRef = useRef(0);

  const [markerPosition, setMarkerPosition] = useState(points[0]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    if (!totalLength) return;

    const targetPoint = points[activeStage];
    let targetLength = 0;
    let closestDistance = Infinity;

    for (let length = 0; length <= totalLength; length += 2) {
      const p = path.getPointAtLength(
        Math.min(length, totalLength)
      );

      const distance = Math.hypot(
        p.x - targetPoint.x,
        p.y - targetPoint.y
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        targetLength = Math.min(length, totalLength);
      }
    }

    const startLength = currentLengthRef.current;
    let difference = targetLength - startLength;

    if (difference > totalLength / 2) {
      difference -= totalLength;
    } else if (difference < -totalLength / 2) {
      difference += totalLength;
    }

    const duration = 800;
    let frameId;
    let startTime;

    const animate = (time) => {
      if (startTime === undefined) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased = progress * progress * (3 - 2 * progress);

      let length = startLength + difference * eased;
      length = ((length % totalLength) + totalLength) % totalLength;

      const p = path.getPointAtLength(length);
      setMarkerPosition({ x: p.x, y: p.y });

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        currentLengthRef.current = targetLength;
        setHighlightedStage(activeStage);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [activeStage]);


  const stage = stages[activeStage];
  

  const restart = () => {
    setActiveStage(0);
    setIsPlaying(true);
  };

  const nextStage = () => {
    setActiveStage((current) => (current + 1) % stages.length);
  };

  return (
    <section className="market-emotions" aria-labelledby="market-emotions-title">
      <div className="market-emotions__inner">
        <div className="market-emotions__intro">
          <span className="market-emotions__eyebrow">
            TRADING PSYCHOLOGY
          </span>

          <h2 id="market-emotions-title">
            The Cycle of{" "}
            <span>Market Emotions</span>
          </h2>

          <p>
            Markets move. Emotions follow. Learn to recognize the
            psychological patterns that can influence trading decisions.
          </p>
        </div>

        <div className="market-emotions__layout">
          <div className="market-emotions__visual">
            <div className="market-emotions__visual-top">
              <span>THE EMOTIONAL CYCLE</span>
              <span>
                {String(activeStage + 1).padStart(2, "0")} /{" "}
                {String(stages.length).padStart(2, "0")}
              </span>
            </div>

            <svg
              className="market-emotions__svg"
              viewBox="0 0 800 455"
              role="img"
              aria-label={`Market emotions cycle. Current stage: ${stage.name}`}
            >
              <defs>
                <linearGradient
                  id="emotionPathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00B8A9" />
                  <stop offset="55%" stopColor="#F4B740" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>

                <filter id="emotionGlow" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

                <path
                ref={pathRef}
                d={cyclePath}
                className="market-emotions__track"
                />

              <path
                d={cyclePath}
                className="market-emotions__track-active"
                pathLength="100"
                strokeDasharray={`${((highlightedStage + 1) / stages.length) * 100} 100`}
              />

              {points.map((p, index) => {
                const item = stages[index];
                const isActive = index === highlightedStage;

                return (
                  <g key={item.name}>
                    {isActive && (
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r="18"
                        fill={item.color}
                        opacity="0.14"
                      />
                    )}

                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isActive ? 8 : 5}
                      fill={isActive ? item.color : "#64748B"}
                      className="market-emotions__node"
                    />

                    <text
                      x={p.x}
                      y={p.y + (index === 0 ? -20 : index === 4 ? 28 : -15)}
                      textAnchor="middle"
                      className={`market-emotions__label ${
                        isActive ? "is-active" : ""
                      }`}
                      fill={isActive ? item.color : "#AAB5C5"}
                    >
                      {item.name}
                    </text>
                  </g>
                );
              })}


                
                <g
                className="market-emotions__marker"
                transform={`translate(${markerPosition.x} ${markerPosition.y})`}
                >
                <circle
                    r="12"
                    fill={stage.color}
                    opacity="0.2"
                />
                <circle
                    r="5"
                    fill={stage.color}
                    filter="url(#emotionGlow)"
                />
                </g>



              <text
                x="400"
                y="220"
                textAnchor="middle"
                className="market-emotions__center-title"
              >
                MARKET
              </text>
              <text
                x="400"
                y="245"
                textAnchor="middle"
                className="market-emotions__center-title"
              >
                PSYCHOLOGY
              </text>
              <text
                x="400"
                y="270"
                textAnchor="middle"
                className="market-emotions__center-caption"
              >
                Recognize the emotion.
              </text>
              <text
                x="400"
                y="287"
                textAnchor="middle"
                className="market-emotions__center-caption"
              >
                Follow your plan.
              </text>
            </svg>

            <div className="market-emotions__controls">
              <button
                type="button"
                className="market-emotions__control market-emotions__control--primary"
                onClick={() => setIsPlaying((playing) => !playing)}
                aria-label={isPlaying ? "Pause story" : "Play story"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? "Pause story" : "Play story"}
              </button>

              <button
                type="button"
                className="market-emotions__control"
                onClick={restart}
              >
                <RotateCcw size={15} />
                Restart
              </button>

              <button
                type="button"
                className="market-emotions__control"
                onClick={nextStage}
              >
                Next stage
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <article
            className="market-emotions__story"
            aria-live="polite"
            aria-atomic="true"
            style={{ "--stage-color": stage.color }}
          >
            <div className="market-emotions__story-top">
              <span className="market-emotions__stage-number">
                STAGE {String(activeStage + 1).padStart(2, "0")}
              </span>
              <span className="market-emotions__stage-dot" />
            </div>

            <span className="market-emotions__phase">
              {stage.phase}
            </span>

            <h3 key={stage.name}>{stage.name}</h3>

            <p className="market-emotions__description" key={stage.description}>
              {stage.description}
            </p>

            <div className="market-emotions__lesson">
              <span>THE TRADER'S LESSON</span>
              <p>{stage.lesson}</p>
            </div>

            <div
              className="market-emotions__progress"
              aria-label={`Stage ${activeStage + 1} of ${stages.length}`}
            >
              {stages.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={`market-emotions__progress-step ${
                    index === activeStage ? "is-active" : ""
                  }`}
                  style={{ "--stage-color": item.color }}
                  onClick={() => setActiveStage(index)}
                  aria-label={`Go to ${item.name}`}
                  aria-current={index === activeStage ? "step" : undefined}
                />
              ))}
            </div>

            <p className="market-emotions__footer">
              {isPlaying
                ? "The story advances automatically."
                : "Explore each stage at your own pace."}
            </p>
          </article>
        </div>

        <p className="market-emotions__disclaimer">
          Educational illustration only. Market emotions do not reliably
          predict future price movements or guarantee a market turning point.
        </p>
      </div>
    </section>
  );
}
