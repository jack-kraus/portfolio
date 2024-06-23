import '../css/Home.css';

function Home() {
  return (
    <>
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
            <div className="project"><a href="/" className="more">More...</a></div>
        </section>
        
        <h2>Skills</h2>
        
        <section id="skills">
          <div className='skill'>HTML</div>
          <div className='skill'>CSS</div>
          <div className='skill'>JavaScript</div>
          <div className='skill'>Mongodb</div>
          <div className='skill'>JavaScript</div>
        </section>
        
        <h2>Contact</h2>
        
        <section id="contact">
            
        </section>
      </main>
    </>
  )
}

export default Home;
