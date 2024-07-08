import '../sass/Navbar.scss';
import SocialLink from './SocialLink';

export default function Navbar() {
    return <nav>
        <h1>Jack <span className="gradient">Kraus</span></h1>
        <div>
            <a href="#projects-header">Projects</a>
            <a href="#skills-header">Skills</a>
            <a href="./jackk_resume_.pdf" target="_blank" className="gradient">Resume</a>
            <SocialLink url="https://github.com/jack-kraus" origin='github'/>
            <SocialLink url="https://www.linkedin.com/in/jack-kraus-78220a2a8/" origin='linkedin'/>
        </div>
    </nav>;
}