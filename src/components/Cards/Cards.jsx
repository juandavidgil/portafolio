import React from "react";

const GlassCard = ({
  image,
  title,
  description,
  width = "280px",
}) => {
  return (
    <div
      style={{
        width,
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
      }}
    >
      {/* Imagen */}
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Contenido */}
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            margin: "0 0 10px 0",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default GlassCard;