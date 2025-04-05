import tasklanding from "../assets/tasksinc/tasklanding.png"
import taskLogin from "../assets/tasksinc/taskLogin.png"
import taskdash from "../assets/tasksinc/taskdash.png"
import taskform from "../assets/tasksinc/taskform.png"
import taskresponsive from "../assets/tasksinc/taskresponsive.png"
import irenecatalog from "../assets/ireneshop/catalog.png"
import irenelogin from "../assets/ireneshop/loginReal.png"
import ireneform from "../assets/ireneshop/login.png"
import irenetabla from "../assets/ireneshop/tabla.png"
export const projects = [
    {
        title: "TaskSync",
        description: "Gestor de tareas con autenticación segura (verificación por correo) y CRUD completo. Filtra tareas por prioridad, fecha o estado, busca por título/descripción y gestiona deadlines. Preparado para escalar con IA y geolocalización.",
        tech: ["React", "Firebase", "Tailwind", "Netlify"],
        demoUrl: "https://tasksinc.netlify.app",
        codeUrl: "https://github.com/adrianfa-f/TaskSinc", // Enlace corregido
        images: [ 
            tasklanding,
            taskLogin,
            taskdash,
            taskform,
            taskresponsive
        ],
    },
    {
        title: "Irene Shapes",
        description: "Catálogo de productos con autenticación de administrador para gestionar CRUD. Integra Supabase para base de datos y almacenamiento de imágenes.",
        tech: ["React", "Supabase", "Tailwind", "Netlify"],
        demoUrl: "https://ireneshape.netlify.app",
        codeUrl: "https://github.com/adrianfa-f/Irene-Shop", // Enlace corregido
        images: [
            irenecatalog,
            irenelogin, 
            ireneform, 
            irenetabla
        ], // Asegúrate de tener esta imagen en tu carpeta de assets
    },
    // Puedes añadir más proyectos aquí...
];