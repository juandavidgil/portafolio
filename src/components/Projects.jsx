import ArcPattern from "./ArcPattern";
import Title from "./Titulos/Title";
import Cards from "./Cards/Cards";
import image_1 from "../assets/images/pexels-technobulka-4842544.jpg";

function Projects() {
    return (
        <div className="projects">
            <ArcPattern />
                <Title text="Proyectos" size="5rem"  />
                <div className="Cards-container">
                <Cards title="Proyecto 1" description="Descripción del proyecto 1" image={image_1} />
                <Cards title="Proyecto 1" description="Descripción del proyecto 1" image={image_1} />
                <Cards title="Proyecto 1" description="Descripción del proyecto 1" image={image_1} />
                <Cards title="Proyecto 1" description="Descripción del proyecto 1" image={image_1} />
                <Cards title="Proyecto 1" description="Descripción del proyecto 1" image={image_1} />

                </div>
        </div>
    );
    }
export default Projects;