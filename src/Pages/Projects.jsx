import ArcPattern from "../Components/ArcPattern";
import Title from "../Components/Titulos/Title";
import Cards from "../Components/Cards/Cards";
import image_1 from "../assets/images/pexels-technobulka-4842544.jpg";
import './css/Projects.css';
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