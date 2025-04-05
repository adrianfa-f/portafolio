import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProjectCard = ({ title, description, tech, demoUrl, codeUrl, images }) => {
    
    
    return (
        <div className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="relative h-56">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                        <div className={`h-full w-full flex items-center justify-center bg-slate-800 p-4 ${
                            img.vertical ? 'max-w-[400px] mx-auto' : '' // Ancho máximo para verticales
                        }`}>
                            <img 
                                src={img} 
                                alt={`${title} - Captura ${index + 1}`} 
                                className={`max-h-full ${img.vertical ? 'max-w-[80%]' : 'max-w-full'}`}
                            />
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
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