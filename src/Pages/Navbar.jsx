import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./css/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      
      <nav className={`nav-menu ${open ? "active" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
        <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

    </header>
  );
}