import Carousel from '../components/Carousel';
import Icon from '../components/Icon';
import '../css/App.css';

interface project_props {
  title : string,
  images : {image:string, caption:string}[],
  description? : string,
  link : string,
  stack? : string[]
}

function Project({link, title, images, description, stack} : project_props) {
  return (
    <>
      <h1 className='mb-4'><a href={link}>{title}</a></h1>
      <div className='flex flex-row gap-10'>
        {images ? <Carousel images={images}/> : <></>}
        <div>
          <p>{description}</p>

          <hr className='bg-scale-950 border-1 border-scale-950 m-2'/>
          <h2 className='text-lg font-semibold'>Stack Used</h2>
          <ul className='list-disc ml-4'>
            {stack ? stack.map((item) => <li><Icon name={item}/></li>) : <></>}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Project;
