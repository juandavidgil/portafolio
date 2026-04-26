import { useEffect, useRef, useState } from "react";
import "../App.css";

/**
 * SemiCircleWaves — Componente reutilizable de ondas semicirculares
 *
 * Props:
 * @param {number}   rings        — Número de anillos (default: 10)
 * @param {string}   color        — Color de las líneas (default: '#fff5e0')
 * @param {number}   strokeWidth  — Grosor de línea (default: 1.5)
 * @param {number}   size         — Ancho total en px (default: 500)
 * @param {string}   bg           — Color de fondo (default: '#0e0a05')
 * @param {string}   animation    — 'pulse' | 'wave' | 'breathe' | 'none' (default: 'wave')
 * @param {number}   speed        — Velocidad de animación en ms (default: 2000)
 * @param {number}   gap          — Espacio entre anillos en px (default: 20)
 * @param {boolean}  interactive  — Hover interactivo (default: true)
 * @param {string}   className    — Clase CSS adicional para el wrapper
 */
export default function SemiCircleWaves({
  rings = 10,
  color = "#fff5e0",
  strokeWidth = 1.5,
  size = 500,
  bg = "#0e0a05",
  animation = "wave",
  speed = 2000,
  gap = 20,
  interactive = true,
  className = "",
}) {
  const [hovered, setHovered] = useState(false);
  const [tick, setTick] = useState(0);
  const animRef = useRef(null);
  const startRef = useRef(null);

  const height = size / 2 + gap;
  const cx = size / 2;
  const cy = height;

  useEffect(() => {
    if (animation === "none") {
      cancelAnimationFrame(animRef.current);
      startRef.current = null;
      return;
    }

    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      setTick(ts - startRef.current);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animation]);

  const getRingStyle = (i) => {
    const progress = i / rings;
    const t = tick / speed;

    if (animation === "pulse") {
      const phase = (Math.sin(t * Math.PI * 2 - progress * Math.PI * 2) + 1) / 2;
      return {
        opacity: 0.2 + phase * 0.8,
        strokeWidth: strokeWidth * (0.5 + phase * 1.2),
      };
    }

    if (animation === "wave") {
      const phase = Math.sin(t * Math.PI * 2 + progress * Math.PI * 3);
      return {
        opacity: 0.4 + ((phase + 1) / 2) * 0.6,
        strokeWidth,
        transform: `translateY(${phase * 2}px)`,
      };
    }

    if (animation === "breathe") {
      const delay = progress * 0.5;
      const localPhase = (Math.sin((t - delay) * Math.PI * 2) + 1) / 2;
      const globalPhase = (Math.sin(t * Math.PI * 2) + 1) / 2;
      return {
        opacity: 0.15 + localPhase * 0.85,
        strokeWidth: strokeWidth * (0.7 + globalPhase * 0.6),
      };
    }

    return { opacity: 1, strokeWidth };
  };

  const getHoverStyle = (i) => {
    if (!interactive || !hovered) return {};
    const progress = i / rings;
    return {
      opacity: 0.2 + progress * 0.8,
      filter: `drop-shadow(0 0 ${progress * 4}px ${color})`,
    };
  };

  const wrapperClasses = [
    "scw-wrapper",
    interactive ? "scw-interactive" : "",
    hovered ? "scw-hovered" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClasses}
      style={{ background: bg }}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
    >
      <svg
        className="scw-svg"
        width={size}
        height={height}
        viewBox={`0 0 ${size} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: rings }).map((_, i) => {
          const idx = rings - i;
          const radius = idx * gap;
          const ringStyle = getRingStyle(i);
          const hoverStyle = getHoverStyle(i);

          return (
            <path
              key={i}
              d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
              fill="none"
              stroke={color}
              strokeWidth={ringStyle.strokeWidth ?? strokeWidth}
              strokeLinecap="round"
              style={{
                opacity: ringStyle.opacity ?? 1,
                transform: ringStyle.transform,
                transformOrigin: `${cx}px ${cy}px`,
                transition:
                  animation === "none"
                    ? "opacity 0.3s ease, stroke-width 0.3s ease"
                    : "none",
                ...hoverStyle,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}