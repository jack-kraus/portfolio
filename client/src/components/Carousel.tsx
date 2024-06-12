import { useState } from "react"

interface CarouselProps {
    images : {image:string , caption: string}[],
    width? : string,
    height? : string
}

const mod = (a : number, b : number) => ((a % b) + b) % b;

export default function Carousel({images} : CarouselProps) {
    const [index, setIndex] = useState(0);

    function setIndexFunc(delta : number) {
        return () => setIndex(mod(index + delta, images.length));
    }
    
    return <div className="bg-scale-950 rounded-xl p-3 relative text-scale-100 flex flex-col justify-center" style={{width:1500}}>
        <img className="h-96 object-contain" src={images[index].image}/>
        <button className="absolute left-1 top-1/2 font-black" onClick={setIndexFunc(-1)}>&lt;</button>
        <button className="absolute right-1 top-1/2 font-black" onClick={setIndexFunc(1)}>&gt;</button>
        <p className="absolute right-2 top-2 bg-scale-950 rounded-bl-xl p-2">{index+1}/{images.length}</p>
        <p className="text-center">{images[index].caption}</p>
    </div>
}