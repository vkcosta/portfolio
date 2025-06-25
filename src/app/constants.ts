import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { InputTimelineSection } from "./components/TimelineSection";
import { TSkill } from "./resume/Skills";
import { SiAngular, SiCss3, SiDocker, SiElectron, SiExpress, SiGit, SiIonic, SiJavascript, SiJest, SiLeaflet, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypescript } from "react-icons/si";
import { GoDatabase } from 'react-icons/go';
import { IoLibraryOutline } from "react-icons/io5";

interface IProfile {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    facebook: string;
    github: string;
    occupation: string;
    address: string;
    birthday: string;
    link_download_cv: string;
    resume: InputTimelineSection[];
    skills: TSkill[];
}

export const profile: IProfile = {
    name: 'Vitor Knupp',
    email: 'vito.knupp@mail.com',
    phone: '+351 930 908 519',
    linkedin: 'https://www.linkedin.com/in/vitor-knupp-costa',
    facebook: 'https://www.facebook.com/vitor.knuppcosta',
    github: 'https://github.com/vkcosta',
    occupation: 'Fullstack Developer',
    address: 'Rio Tinto, Porto – Portugal',
    birthday: 'August 21, 1993',
    link_download_cv: 'https://docs.google.com/document/d/14inmTIfZnktsccrADnNO-lfC614gwshZREs-SVOUKrU/export?format=pdf',
    resume: [
        {
            icon: faGraduationCap,
            title: "Education",
            items: [
                {
                    title: 'Bacharelado em Sistemas de Informação',
                    subtitle: '2015 - 2019',
                    description: 'Centro Universitário Católico de Vitória'
                },
                {
                    title: 'Curso Técnico em Informática',
                    subtitle: '2011 - 2012',
                    description: 'Centro Estadual de Educação Técnica Vasco Coutinho'
                },
            ]
        },
        {
            icon: faBriefcase,
            title: "Experience",
            items: [
                {
                    title: 'Microkids — Desenvolvedor de Software (Freelancer)',
                    subtitle: '2023 - 2024',
                    description: `Desenvolvimento de uma aplicação comercial voltada para educação infantil, nas plataformas web (Angular) e desktop (Electron).
          Implementação de um editor gráfico interativo com Fabric.js, permitindo a manipulação dinâmica de elementos visuais em atividades educacionais.
          Contribuição para melhorias de interface (UI/UX) e desempenho da aplicação.`
                },
                {
                    title: 'EcoSoft — Analista de Sistemas',
                    subtitle: '2018 - 2025',
                    description: `Responsável pela análise de requisitos, modelagem de dados, desenvolvimento de APIs RESTful e interfaces web utilizando TypeScript, Angular, Node.js e PostgreSQL. Atuei na implementação de novas funcionalidades, correção de bugs, refatoração de código legado e melhoria contínua da performance dos sistemas. Participei de revisões de código, testes automatizados e integrações com serviços externos. Colaborei com equipes multidisciplinares em metodologias ágeis, entregando soluções voltadas à gestão e análise de dados ambientais.`
                },
            ]
        }
    ],
    skills: [
        {
            icon: SiJavascript,
            className: "text-yellow-500",
            name: "JavaScript",
            description: "Linguagem de programação amplamente usada no desenvolvimento web.",
        },
        {
            icon: SiTypescript,
            className: "text-blue-600",
            name: "TypeScript",
            description: "Superset do JavaScript com tipagem estática, usado para aplicações escaláveis.",
        },
        {
            icon: SiPython,
            className: "text-yellow-400",
            name: "Python",
            description: "Linguagem versátil, utilizada em automação, data science e APIs.",
        },
        {
            icon: GoDatabase,
            className: "text-blue-600",
            name: "PL/SQL",
            description: "Linguagem procedural da Oracle usada em banco de dados relacional.",
        },
        {
            icon: SiCss3,
            className: "text-blue-500",
            name: "CSS",
            description: "Linguagem de estilo para controle visual de páginas web.",
        },
        {
            icon: SiReact,
            className: "text-cyan-400",
            name: "React",
            description: "Biblioteca para construção de interfaces reativas e componentes reutilizáveis.",
        },
        {
            icon: SiAngular,
            className: "text-red-600",
            name: "Angular",
            description: "Framework robusto para aplicações web SPA com TypeScript.",
        },
        {
            icon: SiNodedotjs,
            className: "text-green-600",
            name: "Node.js",
            description: "Ambiente de execução server-side para aplicações JavaScript escaláveis.",
        },
        {
            icon: SiExpress,
            className: "text-gray-700",
            name: "Express",
            description: "Framework minimalista para APIs rápidas e eficientes no Node.js.",
        },
        {
            icon: SiIonic,
            className: "text-blue-500",
            name: "Ionic",
            description: "Framework para aplicações híbridas com suporte a dispositivos móveis.",
        },
        {
            icon: SiNextdotjs,
            className: "text-black",
            name: "Next.js",
            description: "Framework React fullstack com foco em performance e renderização híbrida.",
        },
        {
            icon: SiElectron,
            className: "text-blue-600",
            name: "Electron",
            description: "Framework para criação de aplicações desktop usando tecnologias web.",
        },
        {
            icon: SiJest,
            className: "text-pink-500",
            name: "Jest",
            description: "Framework de testes em JavaScript com foco em simplicidade e cobertura.",
        },
        {
            icon: SiLeaflet,
            className: "text-green-700",
            name: "Leaflet",
            description: "Biblioteca JavaScript open-source para mapas interativos.",
        },
        {
            icon: IoLibraryOutline,
            className: "text-purple-600",
            name: "Fabric.js",
            description: "Biblioteca para manipulação de canvas HTML com objetos interativos.",
        },
        {
            icon: SiPostgresql,
            className: "text-blue-800",
            name: "PostgreSQL",
            description: "Banco de dados relacional avançado, open-source e com suporte a extensões.",
        },
        {
            icon: SiMysql,
            className: "text-blue-600",
            name: "MySQL",
            description: "Sistema de gerenciamento de banco de dados relacional popular e leve.",
        },
        {
            icon: SiMongodb,
            className: "text-green-600",
            name: "MongoDB",
            description: "Banco de dados NoSQL orientado a documentos, escalável e flexível.",
        },
        {
            icon: SiDocker,
            className: "text-blue-500",
            name: "Docker",
            description: "Plataforma de contêineres que permite empacotar e distribuir aplicações.",
        },
        {
            icon: SiGit,
            className: "text-orange-500",
            name: "Git",
            description: "Sistema de controle de versão distribuído, essencial para trabalho em equipe.",
        },
        {
            icon: SiLinux,
            className: "text-gray-800",
            name: "Linux",
            description: "Sistema operacional usado em servidores, com ferramentas poderosas para devs.",
        }
    ]
}