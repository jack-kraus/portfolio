import '../css/Navbar.css';

export default function Navbar() {
    return <nav>
        <h1>Jack <span className="gradient">Kraus</span></h1>
        <div>
            <a href="#projects">Projects</a>
            <a href="#skills">Education</a>
            <a href="#contact">Contact</a>
            <a href="./jackk_resume_.pdf" target="_blank" className="gradient">Resume</a>
            <a href="https://github.com/jack-kraus" target="_blank">
            <img className="icon" src="./images/github.svg"/>
            </a>
        </div>
    </nav>;
}