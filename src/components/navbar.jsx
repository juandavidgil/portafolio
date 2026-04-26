import { useState } from "react";
import { Menu, X } from "lucide-react";

import "../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="navbar">
      <nav className={`nav-menu ${open ? "active" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
        <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
        <a href="#home" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#projects" onClick={() => setOpen(false)}>Habilidades</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
      </nav>

      <button className="menu-btn" onClick={toggleMenu}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}   