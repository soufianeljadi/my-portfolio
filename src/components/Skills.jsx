function Skills() {
  const skills = ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "C", "C++", "PHP", "Laravel", "MySQL", "Java", "J2EE", "Bootstrap"];

  return (
    <section id="skills" className="py-20 bg-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-white rounded shadow hover:shadow-lg transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
