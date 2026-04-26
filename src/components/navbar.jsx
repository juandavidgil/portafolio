import '../App.css'

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home">Sobre Mi</a></li>
                <li className="navbar-item"><a href="#about">Proyectos</a></li>
                <li className="navbar-item"><a href="#projects">Inicio</a></li>
                <li className="navbar-item"><a href="#contact">Habilidades</a></li>
                <li className="navbar-item"><a href="#contact">Contacto</a></li>
            </ul>
        </nav>

        </>
    );
}   
export default Navbar;  