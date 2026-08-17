// import React from "react";

// const works = [
//   "/Mask Group (1).png",
//   "/Card Works.png",
//   "/Card Works (1).png",
//   "/Card Works (2).png",
//   "/Card Works (3).png",
//   "/Card Works (1).png",
// ];

// export default function Works() {
//   return (
//     <section className="works" id="works">
//       <div className="works-grid">
//         {works.map((image, index) => (
//           <div className="work-card" key={index}>
//             <img src={image} alt={`Project ${index + 1}`} className="work-card-img" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";

import card1Img from "../assets/Cardworks1.png"
import card2Img from "../assets/Cardworks2.png"
import card3Img from "../assets/Cardworks3.png"
import card4Img from "../assets/Cardworks4.png"



const works = [
  {
    id: 1,
    title: "Profesional Art Printing Data More",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    image: card1Img,
    hasSeeProject: true,
  },
  {
    id: 2,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    image:  card3Img,
    // image: "/work-dashboard.jpg",
    hasSeeProject: false,
  },
  {
    id: 3,
    title: "Website Portfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    image: card4Img,
    hasSeeProject: false,
  },
  {
    id: 4,
    title: "Profesional Art                                     Printing Data More",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    image: card2Img,
    hasSeeProject: false,
  },
  {
    id: 5,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    image: card3Img,
    // image: "/work-dashboard-2.jpg",
    hasSeeProject: false,
  },
  {
    id: 6,
    title: "Website Portfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    image: card4Img,
    // image: "/work-portfolio-2.jpg",
    hasSeeProject: false,
  },
];

function WorkCard({ work }) {
  return (
    <div className="work-card">
      <img src={work.image} alt={work.title} className="work-card-img" />
      <div className="work-card-overlay">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
        <div className="work-tags">
          {work.tags.map((tag) => (
            <span key={tag} className="work-tag">
              {tag}
            </span>
          ))}
        </div>
        {work.hasSeeProject && (
          <button className="work-see-project">See project</button>
        )}
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="works-grid">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}