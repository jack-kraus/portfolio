import SocialLink from "./SocialLink";

interface SocialLink {
    url : string,
    origin : "github" | "deployment"
}

interface ProjectProps {
    title : string,
    subtitle : string,
    links? : SocialLink[],
    image : string,
    objectives? : string[],
    right? : boolean
}

export default function Project({ title, subtitle, links, objectives, image, right } : ProjectProps) {    
    return <div className={"project" + (right ? " right" : "")}>
        <div className="description">
            <div className='header-holder'>
                <h3>{title}</h3>
            </div>
            <p>{subtitle}</p>
            {links && links.map((item,  i : number) => <SocialLink {...item} key={i}/>)}
            {objectives && <ul>
                {objectives.map((item : string, i : number) => <li key={i}>{item}</li>)}
            </ul>}
        </div>
        <div>
            <img className="gradient-border sm:w-96 max-w-1/3 w-full" src={image}/>
        </div>
    </div>;
}