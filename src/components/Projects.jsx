// components/Projects.jsx
import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">
                    Proyectos Destacados
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;