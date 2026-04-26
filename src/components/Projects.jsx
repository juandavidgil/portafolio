import ArcPattern from "./ArcPattern";
import Title from "./Titulos/Title";
import Cards from "./Cards/Cards";
import image_1 from "../assets/images/pexels-technobulka-4842544.jpg";

function Projects() {
    return (
        <div className="projects">
                {/* <ArcPattern /> */}
                <Title text="Proyectos" />
                <Cards title="Proyecto 1" description="Descripción del proyecto 1" image={image_1} />
        </div>
    );
    }
export default Projects;