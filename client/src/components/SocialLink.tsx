import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

interface SocialLink {
    url : string,
    origin : "github" | "deployment" | "linkedin"
}

export default function SocialLink({url, origin} : SocialLink, index: number) {
    switch (origin) {
        case "github": {
            return <a href={url} target="_blank" className='github' key={index}>
                <BsGithub size={30}/>
            </a>
        }
        case "deployment": {
            return <a href={url} target="_blank" className='external' key={index}>
                <FiExternalLink size={30}/>
            </a>
        }
        case "linkedin": {
            return <a href={url}  target="_blank" className='linkedin'>
                <FaLinkedin size={30}/>
            </a>
        }
        default: {
            throw "Case not found!"
        }
    }
}