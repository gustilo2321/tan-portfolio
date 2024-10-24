import React from 'react';
import './Skills.css'; // Ensure this CSS file is updated accordingly

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <hr className="skills-divider" />

      {/* Flex container for Technologies */}
      <div className="flex-container">
        {/* Left side: Technologies */}
        <div className="left-side">
          <h3>Technologies</h3>
        </div>

        {/* Right side: Technology boxes */}
        <div className="right-side">
          <div className="tech-items">
            <div className="tech-box">HTML & CSS</div>
            <div className="tech-box">React JS</div>
            <div className="tech-box">Adobe Products</div>
          </div>
        </div>
      </div>

      {/* Flex container for Services */}
      <div className="flex-container">
        {/* Left side: Services */}
        <div className="left-side">
          <h3>Services</h3>
        </div>

        {/* Right side: Service Descriptions */}
        <div className="right-side">
          <div className="service">
            <h4>Photography</h4>
            <hr className="service-divider" />
            <p>
              I provide <span className="highlight">professional photography services</span>, capturing unique moments
              with precision and creativity. Whether it's portraits, events, or product photography, I focus on telling
              a story through each shot, delivering high-quality images that reflect your vision.
            </p>
          </div>

          <div className="service">
            <h4>Mob Apps</h4>
            <hr className="service-divider" />
            <p>
              I specialize in developing custom <span className="highlight">mobile applications</span> that are intuitive,
              responsive, and tailored to your business needs. From concept to launch, I create apps that deliver
              seamless user experiences across both iOS and Android platforms.
            </p>
          </div>

          <div className="service">
            <h4>UI/UX Design</h4>
            <hr className="service-divider" />
            <p>
              As a <span className="highlight">UI/UX designer</span>, I craft user-centered designs that are both visually
              appealing and functional. I focus on creating interfaces that enhance usability and ensure a smooth,
              engaging experience for your users, whether on websites or mobile apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
