import { motion } from "framer-motion";

function ProjectCard({ title, description, github }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px #2b9d2bff" }}
      className="border border-gray-700 p-6 rounded-lg shadow-md transition duration-300 bg-gray-900"
    >
      <h3 className="text-xl font-bold text-omnitrixGreen mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href={github} target="_blank" className="text-gray-200 hover:text-omnitrixGreen">GitHub</a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
