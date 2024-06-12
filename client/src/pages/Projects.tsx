import ProjectItem from '../components/ProjectItem';
import '../css/App.css';
import data from '../data/pages';

function Projects() {
  return (
    <>
      <h1 className='mb-3 underline'>Projects</h1>
      <ul className='gap-3 flex flex-col'>
        {Object.entries(data).map(([key, value] : [string, any], i) => <li key={i}><ProjectItem link={`/projects/${key}`} {...value}/></li>)}
      </ul>
    </>
  )
}

export default Projects;
