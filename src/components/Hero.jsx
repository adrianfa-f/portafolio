const Hero = () => {
    return (
        <section id="hero" className="min-h-screen bg-slate-900 flex items-center pt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
                        Hola, soy <span className="text-cyan-400">Adrián Franco</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-8">
                        Desarrollador Junior Full-Stack enfocado en crear soluciones web con React, Firebase y Python.
                    </p>
                    <div className="flex gap-4">
                        <a 
                            href="#projects" 
                            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                        >
                            Ver Proyectos
                        </a>
                        <a 
                            href="#contact" 
                            className="border border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500/10 transition-colors"
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;