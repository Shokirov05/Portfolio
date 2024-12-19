import React from "react";
import "../scss/Project.scss";

const Projects = () => {
  return (
    <div>
          <div className="recent_works">
    <section className="recent-works">
      <h2 style={{marginTop: "4rem"}}>My Project</h2>
      <div className="works-container">
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 1" />
          <h4 style={{fontSize: "20px"}}>JavaScript Work</h4>
          <a href="#newproject">New</a>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>React js</h4>
          <a href="#newproject">New</a>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>TypeScript Work</h4>
          <a href="#newproject">New</a>
        </div>
      </div>

    <div className="works-container">
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 1" />
          <h4 style={{fontSize: "20px"}}>Html Css</h4>
          <a href="#newproject">New</a>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>Graphql Work</h4>
          <a href="#newproject">New</a>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>Node js work</h4>
          <a href="#newproject">New</a>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default Projects;
