// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Inception",
//     description: "The goal is to build and configure multiple services inside isolated containers, making them communicate through Docker networks while persisting their data using volumes.",
//     image: "/assets/INCPTION.png",
//     github: "https://github.com/soufianeljadi/Inception",
//   },
//   {
//     title: "Internet Relay Chat",
//     description: "This project is about creating your own IRC server. You will use an actual IRC client to connect to your server and test it.",
//     image: "/assets/Irc.png",
//     github: "https://github.com/soufianeljadi/IRC",
//   },
//   {
//     title: "Minishell",
//     description: "The objective of this project is to create a simple shell and learn a lot about processes and file descriptors.",
//     image: "/assets/minishell.png",
//     github: "https://github.com/soufianeljadi/42_Minishell",
//   },
//   {
//     title: "University Registration System",
//     description: "A comprehensive web application for managing university professional course registrations.",
//     image: "/assets/URS.png",
//     github: "https://github.com/soufianeljadi/precandidature-pfe",
//   },    
//   {
//     title: "Restaurant Reservation System",
//     description: "A digital solution for automating restaurant table reservations and scheduling",
//     image: "/assets/RRS.png",
//     github: "https://github.com/soufianeljadi/restaurant-project",
//   },  
//   {
//     title: "Cub3d Graphics Project",
//     description: "A graphics project using the MLX42 library - a performant, cross-platform windowing and graphics library built on OpenGL.",
//     image: "/assets/Cub3d.png",
//     github: "https://github.com/soufianeljadi/Our42Cub3D",
//   },
//   {
//     title: "Born2beroot",
//     description: "This project aims to introduce you to the wonderful world of virtualization.",
//     image: "/assets/b2br.png",
//     github: "https://github.com/soufianeljadi/My42Born2beroot",
//   },
// ];

// export default function ProjectsSection() {
//    return (
//     <section id="projects" className="relative py-20 px-8 bg-[#0b0f0d] text-white">
//       <div className="max-w-5xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center text-green-400 mb-12"
//         >
//           Projects
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9, y: 50 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: idx * 0.1,
//                 ease: "easeOut",
//               }}
//               className="relative bg-[#101511] p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
//             >
//               {/* Glow pulse */}
//               <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-xl opacity-0 hover:opacity-100 transition-all duration-500" />

//               <h3 className="text-xl font-semibold text-green-300 mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-300 text-sm mb-4">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded-lg border border-green-500/20"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm text-green-400 hover:text-green-300 font-medium transition"
//               >
//                 View Project →
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* background glow */}
//       <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3),transparent_70%)]" />
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function ProjectsSection() {
  
  const projects = [
  {
    title: "Inception",
    description: "The goal is to build and configure multiple services inside isolated containers, making them communicate through Docker networks while persisting their data using volumes.",
    img: "/assets/INCPTION.png",
    tech: ["Docker"],
    link: "https://github.com/soufianeljadi/Inception",
  },
  {
    title: "Internet Relay Chat",
    description: "This project is about creating your own IRC server. You will use an actual IRC client to connect to your server and test it.",
    img: "/assets/Irc.png",
    tech: ["C++"],
    link: "https://github.com/soufianeljadi/IRC",
  },
  {
    title: "Minishell",
    description: "The objective of this project is to create a simple shell and learn a lot about processes and file descriptors.",
    img: "/assets/minishell.png",
    tech: ["C","Bash"],
    link: "https://github.com/soufianeljadi/42_Minishell",
  },
  {
    title: "University Registration System",
    description: "A comprehensive web application for managing university professional course registrations.",
    img: "/assets/URS.png",
    tech: ["PHP", "Laravel"],
    link: "https://github.com/soufianeljadi/precandidature-pfe",
  },    
  {
    title: "Restaurant Reservation System",
    description: "A digital solution for automating restaurant table reservations and scheduling",
    img: "/assets/RRS.png",
    tech: ["PHP", "Laravel"],
    link: "https://github.com/soufianeljadi/restaurant-project",
  },  
  {
    title: "Cub3d Graphics Project",
    description: "A graphics project using the MLX42 library - a performant, cross-platform windowing and graphics library built on OpenGL.",
    img: "/assets/Cub3d.png",
    tech: ["C", "Mlx42"],
    link: "https://github.com/soufianeljadi/Our42Cub3D",
  },
  {
    title: "Born2beroot",
    description: "This project aims to introduce you to the wonderful world of virtualization.",
    img: "/assets/b2br.png",
    tech: ["Crontab", "Shell"],
    link: "https://github.com/soufianeljadi/My42Born2beroot",
  },
];


  return (
    <section
      id="projects"
      className="relative py-20 px-8 bg-[#0b0f0d] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-400 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
              className="relative bg-[#101511] rounded-xl overflow-hidden border border-green-500/20 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-5 relative z-10">
                <h3 className="text-xl font-semibold text-green-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded-lg border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-green-400 hover:text-green-300 font-medium transition"
                >
                  View Project on Github →
                </a>
              </div>

              {/* Omnitrix-style pulse */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700">
                <div className="absolute inset-0 rounded-xl blur-3xl bg-green-500/10 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background aura */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_70%)]" />
    </section>
  );
}
