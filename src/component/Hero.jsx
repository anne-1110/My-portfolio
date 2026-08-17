import React from "react";

function Hero() {
  return (
    <section className="hero">

      <div class="socials">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fab fa-twitter"></i></a>
          <a href="https://www.Facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.angellist.com" target="_blank" rel="noreferrer"><i className="fab fa-angellist"></i></a>
      </div>

      <div className="hero-content">
        <h1>
          Hey There.
          <br />
          I'm Maryanne.
        </h1>

        <h2>I'm a Software Developer</h2>

        <p>
          I can help you build a product, feature or website.
          Look <br/> through some of my work and experience! If you like
          what<br/> you see and have a project you need coded,<br/> 
          don't hesitate to contact me.
        </p>
      <div class="socials2">
          <a href="https://www.twitter.com/@tech_annie11" target="_blank" rel="noreferrer"><i className="fa-brands fab fa-twitter"></i></a>
          <a href="https://www.Facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.github.com/anne-1110" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.angellist.com" target="_blank" rel="noreferrer"><i className="fab fa-angellist"></i></a>
      </div>
      </div>

      <div className="hero-image">
        <img src="\Illustration-header.png" alt="Developer illustration"/>
      </div>

    </section>
  );
}

export default Hero;