import React from "react";

const skillGroups = [
  {
    id: 1,
    title: "Language",
    icon: "diamond",
    items: ["JavaScript", "Ruby", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Frameworks",
    icon: "square",
    items: ["React.js", "Ruby on Rails", "RSpec", "Capybara", "Selenium"],
  },
  {
    id: 3,
    title: "Skills",
    icon: "circle",
    items: [
      "Database Management",
      "Version Control",
      "CLI",
      "API Design",
      "Web Development",
    ],
  },
];

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      {/* Top: intro + illustration */}
      <div className="about-top">
        <div className="about-text">
          <h2>About me</h2>
          <p>
            Hey there! I can help you build a product, feature or<br/> website.
            Look through some of my work and experience! If<br/> you like what
            you see and have a project you need coded,<br/> don't hesitate to
            contact me.
          </p>
          <button className="resume-btn">Get my resume</button>
        </div>

        <div className="about-illustration">
          <img src="\Frame.png" alt="" />
        </div>
      </div>


      <hr className="about-divider" />

      {/* Bottom: skill columns */}
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-column" key={group.id}>
            <h3>
              <span className={`icon-${group.icon}`}></span>
              {group.title}
            </h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}