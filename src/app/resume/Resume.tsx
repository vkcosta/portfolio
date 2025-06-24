import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import TimelineSection, { InputTimelineSection } from "../components/TimelineSection";



const Resume = () => {
  const resume: InputTimelineSection[] = [
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
  ];

  return resume.map(({ title, items, icon }, index) => (
    <div key={index}>
      <TimelineSection title={title} items={items} icon={icon}></TimelineSection>
      <p></p>
    </div>
  ))
}

export default Resume;