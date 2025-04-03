import { FiUser, FiCode, FiMail } from "react-icons/fi";
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <nav className="bg-slate-900 p-4 fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="#hero" className="text-cyan-400 text-xl font-bold">Adrian Franco</Link>

                {/* Menú para desktop */}
                <div className="hidden md:flex gap-8">
                    <Link 
                        to="#projects" 
                        className="text-gray-300 hover:text-cyan-400 flex items-center gap-2"
                    >
                        <FiCode /> Proyectos
                    </Link>
                    <Link 
                        to="#about" 
                        className="text-gray-300 hover:text-cyan-400 flex items-center gap-2">
                        <FiUser /> Sobre mí
                    </Link>
                    <Link 
                        to="#contact" 
                        className="text-gray-300 hover:text-cyan-400 flex items-center gap-2">
                        <FiMail /> Contacto
                    </Link>
                </div>

                {/* Hamburger menu para móvil (opcional, si quieres añadirlo luego) */}
            </div>
        </nav>
    );
};

export default Navigation;