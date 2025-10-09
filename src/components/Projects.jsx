import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "IRC",
      description: "This project is a custom implementation of an IRC (Internet Relay Chat) server in C++.",
      github: "https://github.com/soufianeljadi/IRC",
    },    
    {
      title: "Inception",
      description: "The Inception project is a system administration exercise that focuses on Docker containerization and infrastructure setup.",
      github: "https://github.com/soufianeljadi/Inception",
    },    
    {
      title: "Minishell",
      description: "This project is about creating a simple shell. Yes, your own little bash. You will learn a lot about processes and file descriptors.",
      github: "https://github.com/soufianeljadi/42_Minishell",
    },

  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
