import { FaCss3Alt, FaGitlab, FaHtml5, FaJava, FaJira, FaJs, FaPython, FaReact, FaSass } from 'react-icons/fa';
import '../sass/Home.scss';
import { DiMongodb, DiPostgresql } from 'react-icons/di';
import { IconSkill } from '../components/Icon';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiHandlebarsdotjs, SiJquery, SiKeras, SiNumpy, SiOcaml, SiR, SiTypescript } from 'react-icons/si';
import { FaC } from 'react-icons/fa6';
import { BsGithub, BsSlack } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';

/*


*/

function Home() {
  return (
    <main>
      <section className="mission">
        <img className="headshot" src="./images/headshot.jpg"/>
        <p className="mission">My name is Jack Kraus, I'm an aspiring <span className="gradient">Web Developer</span> and <span className="gradient">Software Engineer</span></p>
      </section>
      <table>
          <tr>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          <tr>
            <td><a href="mailto:jackkraus3856@gmail.com">jackkraus3856@gmail.com</a></td>
            <td>(603) 325-5956</td>
          </tr>
        </table>
        
      <h2 id="projects-header">Projects</h2>
      
      <section id="projects">
        <div className="project">
          <img className="gradient-border" src="./images/harbor.jpg"/>
          <div className="description">
            <h3>Harbor Currents</h3>
            <p>An app to assist Harbor Pilots in navigation by displaying currents in the Hudson.</p>
            <ul>
              <li>Collaborated with a group to design and program a mobile app using React, React Native, and the Mapbox library.</li>
              <li>Accommodated the needs of our clients (harbor pilots) by implementing requested features.</li>
              <li>Implemented code to transmit and format data between our data source and a MongoDB database using Python and NumPy, and serve data from the database to each user using an Express server.</li>
            </ul>
          </div>
          </div>
          <hr/>
          <div className="project">
            <div className="description right">
              <div className='header-holder'>
                <h3>Job Application Tracker</h3>
              </div>
              <p>A site to streamline the job hunting process in a user-friendly manner</p>
              <a href="https://github.com/CS546-Team23/Job-Application-Tracker" target="_blank" className='nav-icon github right'>
                <BsGithub size={30}/>
              </a>
              <ul>
                <li>Collaborated with a group using GitHub to develop a Job Application Tracker site</li>
                <li>Created dynamic web pages on the frontend using HTML, CSS, Handlebars, and jQuery with Ajax.</li>
                <li>Communicated with our MongoDB database on the backend with an Express Server</li>
              </ul>
            </div>
            <img className="gradient-border" src="./images/tracker.png"/>
          </div>
      </section>
      
      <h2 id="skills-header">Skills</h2>
      
      <section id="skills">
        <h3 className="skill-header">Web Development</h3>
        <div className='skill-list'>
          <IconSkill icon={<FaHtml5 size={50}/>} color1="#E54C21" color2="#ff9f73" text="HTML"/>
          <IconSkill icon={<FaCss3Alt size={50}/>} color1="#264DE4" color2="#6ebbff" text="CSS"/>
          <IconSkill icon={<DiMongodb size={50}/>} color1="#38de26" color2="#dbff6e" text="MongoDB"/>
          <IconSkill icon={<RiTailwindCssFill size={50}/>} color1="#26bbe4" color2="#6eecff" text="Tailwind"/>
          <IconSkill icon={<SiExpress size={50}/>} color1="#E54C21" color2="#ff9f73" text="Express"/>
          <IconSkill icon={<FaReact size={50}/>} color1="#26bbe4" color2="#6eecff" text="React.js"/>
          <IconSkill icon={<FaReact size={50}/>} color1="#26bbe4" color2="#6eecff" text="React Native"/>
          <IconSkill icon={<DiPostgresql size={50}/>} color1="#264DE4" color2="#6ebbff" text="PostgreSQL"/>
          <IconSkill icon={<FaSass size={50}/>} color1="#e52155" color2="#ff73a4" text="Sass"/>
          <IconSkill icon={<SiJquery size={50}/>} color1="#264DE4" color2="#6ebbff" text="jQuery"/>
          <IconSkill icon={<SiHandlebarsdotjs size={50}/>} color1="#E54C21" color2="#ff9f73" text="Handlebars"/>
        </div>
        <h3 className="skill-header-2">Programming</h3>
        <div className='skill-list'>
          <IconSkill icon={<FaPython size={50}/>} color1="#e4b826" color2="#fffa6e" text="Python"/>
          <IconSkill icon={<FaJava size={50}/>} color1="#E54C21" color2="#ff9f73" text="Java"/>
          <IconSkill icon={<FaJs size={50}/>} color1="#e4b826" color2="#fffa6e" text="JavaScript"/>
          <IconSkill icon={<SiTypescript size={50}/>} color1="#264DE4" color2="#6ebbff" text="Typescript"/>
          <IconSkill icon={<FaC size={50}/>} color1="#26bbe4" color2="#6eecff" text="C"/>
          <IconSkill icon={<SiOcaml size={50}/>} color1="#E54C21" color2="#ff9f73" text="Ocaml"/>
          <IconSkill icon={<SiR size={50}/>} color1="#264DE4" color2="#6ebbff" text="R"/>
          <IconSkill icon={<SiNumpy size={50}/>} color1="#26bbe4" color2="#6eecff" text="Numpy"/>
          <IconSkill icon={<SiKeras size={50}/>} color1="#e52155" color2="#ff73a4"  text="Keras"/>
        </div>
        <h3 className="skill-header-2">Collaboration</h3>
        <div className='skill-list'>
          <IconSkill icon={<BsGithub size={50}/>} color1="#9526e4" color2="#f86eff" text="GitHub"/>
          <IconSkill icon={<FaGitlab size={50}/>} color1="#E54C21" color2="#ff9f73" text="Gitlab"/>
          <IconSkill icon={<FaJira size={50}/>} color1="#26bbe4" color2="#6eecff" text="Jira"/>
          <IconSkill icon={<FiFigma size={50}/>} color1="#e52155" color2="#ff73a4" text="Figma"/>
          <IconSkill icon={<BsSlack size={50}/>}color1="#e4b826" color2="#fffa6e"  text="Slack"/>
        </div>
      </section>
    </main>
  );
}

export default Home;
