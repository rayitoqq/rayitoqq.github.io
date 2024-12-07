// config.js
const config = {
    siteTitle: "Portafolio - Ryayitoqq",
    navLogo: "Portafolio",
    navLinks: [
        { text: "Inicio", href: "#home" },
        { text: "Sobre Mi", href: "#about" },
        { text: "Habilidades", href: "#skills" },
        { text: "Proyectos", href: "#projects" },
        { text: "Contacto", href: "#contact" }
    ],
    hero: {
        title: "Ryayitoqq",
        typedStrings: [
            "Nunca te rindas",
            "Siempre para adelante",
            "No te dejes llevar de la gente"
        ],
        ctaButton: "Contactame",
        secondaryButton: "Ver proyectos"
    },
    about: {
        title: "Sobre Mi",
        description: "Me llamo <span class='highlight'>Ryayitoqq</span>, me gusta mucho la programacion y quisiera se alguien de lo grandes programador estamos en proceso.",
        mission: "Mi mision es hacer esto algo diferente a lo comun.",
        techStack: ["JavaScript", "Python", "SQL", "NodeJS", "PHP", "Html", "Minecraft Developer"]
    },
    skills: {
        title: "Mis Habilidades",
        skillsList: [
            { icon: "fab fa-java", name: "JavaScript" },
            { icon: "fab fa-python", name: "Python" },
            { icon: "fas fa-database", name: "SQL" },
            { icon: "fas fa-code", name: "NodeJS" },
            { icon: "fab fa-php", name: "PHP" },
            { icon: "fab fa-html5", name: "Html" },
            { icon: "fas fa-windows", name: "Windows Optimizer" },
            { icon: "fas fa-cubes", name: "Minecraft Development" }
        ]
    },
    projects: {
        title: "Mis Proyectos",
        projectsList: [
            {
                title: "NeuroBot | Oficial",
                description: "Mi bot verificado con cosas muy divertidad y eficientes.",
                image: "neurobotlogo.png",
                link: "https://dsc.gg/neurobot"
            },
            {
                title: "FluxLux Studio",
                description: "Venta de servicios developeer web,minecraft y discord",
                image: "fluxluxStudios.png",
                link: "https://dsc.gg/fluxluxstudios"
            },
            {
                title: "Fluxlux Hosting",
                description: "Hosting de alta gama potente al mejor precio y en miami",
                image: "fluxhost.png",
                link: "https://dsc.gg/fluxluxhost"
            }
        ]
    },
    contact: {
        title: "Contáctatame",
        email: {
            icon: "fas fa-envelope",
            title: "Correo",
            value: "contacto@ryayitoqq.lat"
        },
        discord: {
            icon: "fab fa-discord",
            title: "Discord",
            value: "Unete a mi comunidad",
            link: "https://discord.gg/zuNr88eXjP"
        },
        github: {
            icon: "fab fa-twitch",
            title: "Twitch",
            value: "Streams aveces",
            link: "https://twitch.tv/ryayitoqq"
        }
    },
    footer: {
        copyright: "© 2024 Ryayitoqq - Siempre para adelante nunca para atras.",
        socialLinks: [
            { icon: "fab fa-github", link: "https://github.com/rayitoqq" },
            { icon: "fab fa-discord", link: "https://discord.gg/zuNr88eXjP" },
            { icon: "fab fa-twitch", link: "https://twitch.tv/ryayitoqq" }
        ]
    }
};
