import React, { useEffect, useState } from "react";
import "../../App.css";

const GlassCard = ({ image, title, description }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />

      <div className={`card-overlay ${show ? "show" : ""}`}>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;