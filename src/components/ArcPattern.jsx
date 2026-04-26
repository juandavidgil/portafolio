import React from "react";

const ArcPattern = ({
  width = 400,
  height = 300,
  arcs = 10,
  spacing = 15,
  stroke = "#fff5e0",
  strokeWidth = 4,
}) => {
  const centerX = width / 2;
  const startY = 50;

  const paths = Array.from({ length: arcs }, (_, i) => {
    const r = arcs * spacing - i * spacing;

    const startX = centerX - r;
    const endX = centerX + r;

    return (
      <path
        key={i}
        d={`M ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${startY}`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ background: "#0e0a05" }}
    >
      {paths}
    </svg>
  );
};

export default ArcPattern;