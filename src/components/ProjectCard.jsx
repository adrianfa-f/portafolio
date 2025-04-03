import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ title, description, tech, demoUrl, codeUrl, image }) => {
    return (
        <div className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{description}</p>
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((item, index) => (
                            <span 
                                key={index} 
                                className="bg-slate-600 text-cyan-400   px-3 py-1 rounded-full text-sm"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <a 
                            href={demoUrl}
                            rel="noopener noreferrer"
                            target="_blank" 
                            className="flex items-center gap-2  text-cyan-400 hover:text-cyan-300"
                        >
                            <FiExternalLink /> Demo
                        </a>
                        <a 
                            href={codeUrl} 
                            rel="noopener noreferrer"
                            target="_blank" 
                            className="flex items-center gap-2  text-gray-400 hover:text-gray-300"
                        >
                            <FiGithub /> Código
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;