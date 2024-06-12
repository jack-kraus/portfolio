import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
    return <nav className="p-7 flex flex-row justify-between items-center bg-scale-400 shadow-md">
        <a href="/" className="text-scale-950 hover:text-scale-100"><h1 className="font-medium">Jack Kraus</h1></a>
        <ul className="flex flex-row gap-4 items-center">
            <li><a className="text-scale-950 hover:text-scale-100" href="/projects">Projects</a></li>
            <li><a className="text-scale-950 hover:text-scale-100" target="_blank" href="https://www.linkedin.com/in/jack-kraus-78220a2a8/"><FaLinkedin/></a></li>
            <li><a className="text-scale-950 hover:text-scale-100" target="_blank" href="https://github.com/jack-kraus"><FaGithub/></a></li>
        </ul>
    </nav>;
}