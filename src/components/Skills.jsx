import { motion } from "framer-motion";

// src/components/Skills.jsx

const skills = [
  { name: "Html", img: process.env.PUBLIC_URL + "/assets/html.png" },
  { name: "Css", img: process.env.PUBLIC_URL + "/assets/css.png" },
  { name: "JavaScript", img:process.env.PUBLIC_URL +  "/assets/js.png" },
  { name: "C", img: process.env.PUBLIC_URL +  "/assets/C.png" },
  { name: "C++", img:process.env.PUBLIC_URL +  "/assets/c-.png" },
  { name: "PHP", img: process.env.PUBLIC_URL +  "/assets/php.png" },
  { name: "Laravel", img: process.env.PUBLIC_URL +  "/assets/Laravel.png" },
  { name: "MySQL", img: process.env.PUBLIC_URL + "/assets/mysql.png" },
  { name: "React", img:  process.env.PUBLIC_URL + "/assets/react.png" },


];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-green-400 drop-shadow-[0_0_15px_#00ff99]">
         Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-6 md:px-20">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gradient-to-br from-green-500/20 to-transparent rounded-xl p-4 shadow-lg shadow-green-500/20"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 object-contain"
            />
            <p className="mt-2 text-sm font-bold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
