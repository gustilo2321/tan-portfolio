import ethan from './images/ethan.jpg';
import AnimatedText from './components/AnimatedText.jsx'; 
import NavBar from './components/NavBar.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="Home-Section">
      <NavBar />
      <main>
        <section className="home" id="home">
          <div className="ethan">
            <img src={ethan} alt="Ethan Gustilo" />
          </div>
          <div className="home-text">
            <h2>Ethan Gustilo</h2>
            <p className='sub-home-text'>I'm your guy if you're looking for a <AnimatedText /></p>
            <p>My work blends the art of <span className="highlight">visual storytelling</span> with the technical skill of building beautiful and functional websites. Whether you're looking for stunning visuals, intuitive design, or a dynamic online presence, I am passionate about delivering creative solutions that inspire and engage.</p>
            <div className="buttons">
              <a href="#projects" className="btn btn-projects">Projects</a>
              <a href="#contact" className="btn btn-contact">Contact Me</a>
            </div>
          </div>
        </section>
        <Skills /> 
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
