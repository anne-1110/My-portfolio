import React from "react";

 function RecentWorks() {
  const tags = ["CSS", "HTML", "Bootstrap", "Ruby"];

  return (
    <section className="recent-works" id="portfolio">
      {/* Header */}
      <div className="recent-works-header">
        <h2>My Recent Works</h2>
        <span className="header-line"></span>
      </div>

      {/* Featured project */}
        <div className="featured-project">
            <div className="featured-image">
                <img src="/Img Placeholder.png" alt="" />
            </div>

            <div className="featured-content">
            <h3>Multi-Post Stories</h3>
            <p>
                A daily selection of privately personalized <br/> reads; no accounts
                or sign-ups required. This<br/> has been the industry's standard
                dummy text<br/> ever since the 1500s, when an unknown printer<br/> took
                a standard dummy text.
            </p>

            <div className="tags">
                {tags.map((tag) => (
                <span key={tag} className="tag">
                    {tag}
                </span>
                ))}
            </div>

            <button className="see-project-btn">See project</button>
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;