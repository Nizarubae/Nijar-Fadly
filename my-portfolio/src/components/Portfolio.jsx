function Portfolio() {
  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project Title 1</h3>
          <img src="path/to/image1.jpg" alt="Project 1" />
          <p>Description of Project 1.</p>
        </div>
        <div className="project-item">
          <h3>Project Title 2</h3>
          <img src="path/to/image2.jpg" alt="Project 2" />
          <p>Description of Project 2.</p>
        </div>
        <div className="project-item">
          <h3>Project Title 3</h3>
          <img src="path/to/image3.jpg" alt="Project 3" />
          <p>Description of Project 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;