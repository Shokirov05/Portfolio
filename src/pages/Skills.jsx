import React from "react";
import "../scss/Skills.scss";

const Skills = () => {
  const frontEndSkills = [
    { name: "HTML/CSS", level: 70 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Sass/SCSS", level: 70 },
    { name: "React", level: 60 },
    { name: "React Native", level: 10 },
  ];

  const backEndSkills = [
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Node", level: 70 },
    { name: "Python", level: 50 },
    { name: "Nest", level: 70 },
  ];

  const dataSkills = [
    { name: "PostgreSQL", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 70 },
    { name: "OODB", level: 0 },
  ];

  return (
    <div className="skills-container">
      <h2 className="h_skills">Skills</h2>
      <div className="skills-section">
        <div className="skills-category">
          <h2>Front End</h2>
          {frontEndSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
        <div className="skills-category">
          <h2>Back End</h2>
          {backEndSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
        <div className="skills-category">
          <h2>DataBase Skills</h2>
          {dataSkills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
