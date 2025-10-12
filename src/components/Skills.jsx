import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "TailwindCSS",
    "Bootstrap", "PHP", "Laravel", "MySQL", "MariaDB",
    "Git", "GitHub", "C", "C++", "Java", "J2EE", "Docker"
  ];

  return (
    <section id="skills" className="relative py-20 px-8 bg-[#0b0f0d] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-green-400 drop-shadow-[0_0_15px_#00ff99] text-center"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#101511] border border-green-500/20 hover:border-green-500/40 transition-all duration-500 rounded-2xl p-10 text-center shadow-lg"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Over the years, I’ve developed a strong technical foundation across both 
            frontend and backend technologies. I enjoy bringing ideas to life through 
            clean, efficient, and modern code.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 bg-[#0f1512] border border-green-400/20 rounded-full text-sm font-medium text-green-300 hover:border-green-400 hover:shadow-[0_0_10px_#00ff99] transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Green glow background */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3),transparent_70%)]" />
    </section>
  );
}
