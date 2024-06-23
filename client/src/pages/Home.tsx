import '../css/Home.css';

function Home() {
  return (
    <>
      <nav>
        <h1>Jack <span className="gradient">Kraus</span></h1>
        <div>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
            <a href="./images/jackk_resume_.pdf" target="_blank" className="gradient">Resume</a>
            <a href="https://github.com/jack-kraus" target="_blank">
                <img className="icon" src="./images/github.svg"/>
            </a>
        </div>
      </nav>
      <main>
          <section className="mission">
              <img className="headshot" src="./images/headshot.jpg"/>
              <p className="mission">My name is Jack Kraus, I'm an aspiring <span className="gradient">Web Developer</span> and <span className="gradient">Software Developer</span></p>
          </section>
          
          <h2>Projects</h2>
          
          <section id="projects">
              <div className="project">
                  <img className="gradient-border " src="./images/harbor.jpg"/>
                  <div className="description">
                      <h3>Harbor Currents</h3>
                      <p>An app to assist Harbor Pilots in navigation by displaying currents in the Hudson.</p>
                  </div>
              </div>
              <hr/>
              <div className="project">
                  <div className="description right">
                      <h3>Job Application Tracker</h3>
                      <p>A site to streamline the job hunting process in a user-friendly manner</p>
                  </div>
                  <img className="gradient-border " src="./images/tracker.png"/>
              </div>
              <a href="/" className="more">More...</a>
          </section>
          
          <h2>Education</h2>
          
          <section id="education">
          </section>
          
          <h2>Contact</h2>
          
          <section id="contact">
              
          </section>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Home;
