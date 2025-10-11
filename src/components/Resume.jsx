import { motion } from "framer-motion";

export default function ResumeSection() {
  const experiences = [
    {
      title: "Technical internship",
      company: "Tasmim Web",
      date: "April 2023 – June 2023",
      details: [
        "Development of an online table reservation web application for partner restaurants.",
        "Developed the application using HTML, CSS, JavaScript, PHP, Laravel, and MySQL.",
      ],
    },
    {
      title: "Introductory internship",
      company: "Kompara Cash",
      date: "July 2022 – August 2022",
      details: [
        "Contribution to the establishment of a comparator of international money transfer companies",
      ],
    },
  ];

  const education = [
    {
      degree: "Software Engineering Student",
      school: "1337 Coding School, Khouribga",
      date: "2023 – Present",
    },
    {
      degree: "DUT Computer Engineering",
      school: "Sultan Moulay Slimane University, Fquih Ben Salah",
      date: "2021 – 2023",
    },
  ];

  return (
    <section id="resume" className="relative py-20 px-8 bg-[#0b0f0d] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-green-400 drop-shadow-[0_0_15px_#00ff99]   text-center">
          Resume
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[#101511] rounded-xl p-5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-green-300 text-sm">{exp.company}</p>
                  <p className="text-gray-400 text-xs mb-2">{exp.date}</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#101511] rounded-xl p-5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-green-300 text-sm">{edu.school}</p>
                  <p className="text-gray-400 text-xs">{edu.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Green glow background */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3),transparent_70%)]" />
    </section>
  );
}
