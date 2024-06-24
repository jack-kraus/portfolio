import { BsGithub } from 'react-icons/bs';
import '../css/Navbar.css';
import { FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
    return <nav>
        <h1>Jack <span className="gradient">Kraus</span></h1>
        <div>
            <a href="#projects-header">Projects</a>
            <a href="#skills-header">Skills</a>
            <a href="./jackk_resume_.pdf" target="_blank" className="gradient">Resume</a>
            <a href="https://github.com/jack-kraus" target="_blank" className='nav-icon github'>
                <BsGithub size={30}/>
            </a>
            <a href="https://www.linkedin.com/in/jack-kraus-78220a2a8/" target="_blank" className='nav-icon linkedin'>
                <FaLinkedin size={30}/>
            </a>
        </div>
    </nav>;
}