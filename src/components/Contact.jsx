import { useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

    emailjs.sendForm(
        'service_avbuzvn', 
        'template_jblg9ne', 
        form.current,
        'g3qSPr-DBh549tMy-'
    )
    .then(() => {
        setIsSent(true);
        form.current.reset();
        setTimeout(() => setIsSent(false), 5000); // Mensaje desaparece después de 5 segundos
    })
    .catch((error) => {
        console.error('Error al enviar:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    })
    .finally(() => {
        setIsLoading(false);
    });
};

    return (
        <section id="contact" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">
                    Contacto
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Formulario */}
                    <form 
                        ref={form} 
                        onSubmit={sendEmail}
                        className="space-y-6"
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                className="w-full bg-slate-700 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu email"
                                className="w-full bg-slate-700 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Tu mensaje"
                                rows="5"
                                className="w-full bg-slate-700 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>
                        <input 
                            type="hidden" 
                            name="date" 
                            value={new Date().toLocaleString()} 
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                        {isSent && (
                            <p className="text-green-400 mt-4">
                                ¡Mensaje enviado con éxito! Te responderé pronto.
                            </p>
                        )}
                    </form>
                    
                    {/* Redes sociales */}
                    <div className="flex flex-col gap-6">
                        <a 
                            href="mailto:adrianfrancoavila1995@gmail.com" 
                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
                        >
                            <FiMail className="text-2xl" /> adrianfrancoavila1995@gmail.com
                        </a>
                        <a 
                            href="https://github.com/adrianfa-f" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
                        >
                            <FiGithub className="text-2xl" /> GitHub
                        </a>
                        <a 
                            href="https://linkedin.com/in/tuperfil" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
                        >
                            <FiLinkedin className="text-2xl" /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;