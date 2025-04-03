const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  // Solo manejar solicitudes POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { email, message } = JSON.parse(event.body);

        const msg = {
            to: 'adrianfrancoavila1995@gmail.com',      // Email donde recibirás los mensajes
            from: 'noreply@tudominio.com', // Debe ser un email verificado en SendGrid
            subject: 'Nuevo mensaje desde tu portafolio',
            text: `De: ${email}\nMensaje: ${message}`,
        };

        await sgMail.send(msg);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Mensaje enviado con éxito' }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al enviar el mensaje' }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
};