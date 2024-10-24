import React from 'react';
import proj1 from '../images/proj1.jpg';
import proj2 from '../images/proj2.jpg';
import proj3 from '../images/proj3.jpg';
import Net from '../images/Net.png';
import LMS from '../images/LMS.png';
import './Projects.css'; // Import the corresponding CSS file

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Photography</h2>
      <hr className="projects-divider" />

      {/* Photography Section */}
      <div className="photography-section">
        <div className="main-photo">
          <img src={proj1} alt="Main Photography" />
        </div>
        <div className="side-photos">
          <img src={proj2} alt="Side Photo 1" />
          <img src={proj3} alt="Side Photo 2" />
        </div>
      </div>

      {/* Existing Projects */}
      <h2>Develop / Design</h2>
      <hr className="projects-divider" />

      {/* First Project: Net Connect App */}
      <div className="project">
        <div className="project-left">
          <img src={Net} alt="Net Connect App" className="project-image" />
        </div>
        <div className="project-right">
          <h3>Net Connect App</h3>
          <p>
            <i className='p-desc'>Net Connect Application </i> is a group project we made during my time as a student.
            It is an app that allows people to connect and do tasks for others. This app can allow anyone, including a student, to
            earn during their free time. It's one of my earliest designs.
          </p>
        </div>
      </div>

      {/* Second Project: Learning Management System */}
      <div className="project">
        <div className="project-left">
          <img src={LMS} alt="Learning Management System" className="project-image" />
        </div>
        <div className="project-right">
          <h3>Learning Management System</h3>
          <p>
            This project is my take on how the Western Institute of Technology's 
            <i className='p-desc'> Learning Management System </i> should look like. It's a mobile application that 
            I designed to be intuitive and user-friendly. Its functions include account creation, being able to choose your preferred 
            semester, and then viewing your grades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
