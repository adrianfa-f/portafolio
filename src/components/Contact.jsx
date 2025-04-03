import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const message = formData.get('message');
        
        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            if (!response.ok) throw new Error('Error en la solicitud');

            setSubmitStatus('success');
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12">
                    Contacto
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                placeholder="Mensaje" 
                                rows="5"
                                className="w-full bg-slate-700 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>

                        {/* Mensajes de estado */}
                        {submitStatus === 'success' && (
                            <p className="text-green-400">¡Mensaje enviado! Te responderé pronto.</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-400">Error al enviar. Inténtalo de nuevo.</p>
                        )}
                    </form>
                    
                    <div className="flex flex-col gap-6">
                        <a href="adrianfrancoavila1995@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                            <FiMail className="text-2xl" /> adrianfrancoavila1995@gmail.com
                        </a>
                        <a href="https://github.com/adrianfa-f" rel="noopener noreferrer" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                            <FiGithub className="text-2xl" /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/tuperfil" rel="noopener noreferrer" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                            <FiLinkedin className="text-2xl" /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;