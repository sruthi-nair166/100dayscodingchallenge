function Projects({ projects }) {
  return (
    <>
      <h2>Projects</h2>

      <div id="card-container">
        {projects.map((project) => (
          <article className="card" key={project.id}>
            <a href={project.link} target="_blank">
              <div className="image-wrapper">
                <img src={project.image} alt={project.alt} />
              </div>

              <div className="card-text">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}

export default Projects;
