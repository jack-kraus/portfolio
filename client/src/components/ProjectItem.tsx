interface project_props {
    title : string,
    images? : string[],
    description? : string
    link : string
  }
  

export default function ProjectItem({link, title, description} : project_props) {
    return <div className="width-full bg-scale-400 flex flex-col rounded-xl p-3">
        <h2 className="font-semibold"><a href={link}>{title}</a></h2>
        <p>{description}</p>
    </div>
}