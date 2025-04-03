import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">
                    Sobre Mí
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-gray-400 mb-6">
                            Soy un desarrollador autodidacta apasionado por construir aplicaciones web funcionales y elegantes. 
                            Comencé mi viaje en 2023 aprendiendo HTML y CSS, y hoy me enfoco en tecnologías como React y Firebase.
                        </p>
                        <p className="text-gray-400">
                            Cuando no estoy codificando, me gusta documentar mi aprendizaje en blogs técnicos y explorar nuevas herramientas.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-100 mb-6">Habilidades</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                                <FaReact className="text-cyan-400" /> React
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                                <SiTailwindcss className="text-cyan-400" /> Tailwind
                            </div>
                            {/* Añade más habilidades con iconos */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;