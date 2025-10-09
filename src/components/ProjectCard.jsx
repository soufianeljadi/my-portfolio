function ProjectCard({ title, description, github, demo }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href={github} target="_blank" className="text-green-500 hover:underline">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;
