import { cloneElement, ReactElement } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IconProps {
    icon : ReactElement<any>
    color1 : string,
    color2 : string,
    text?: string
}


export default function Icon({icon, color1, color2} : IconProps) {
    const id = uuidv4();
    const element = cloneElement(icon, {
        style: { stroke: `url(#${id})`, fill: `url(#${id})`, size: "3x" }
    });
    
    return <>
        <svg width="0" height="0">
            <linearGradient id={id} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop stopColor={color1} offset="0%" />
                <stop stopColor={color2} offset="100%" />
            </linearGradient>
        </svg>
        {element}
    </>
}


export function IconSkill({icon, color1, color2, text} : IconProps) {
    const id = uuidv4();
    const element = cloneElement(icon, {
        style: { stroke: `url(#${id})`, fill: `url(#${id})` }
    });
    
    return <>
        <svg width="0" height="0">
            <linearGradient id={id} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop stopColor={color1} offset="0%" />
                <stop stopColor={color2} offset="100%" />
            </linearGradient>
        </svg>
        <div className="skill">
            {element} {text}
        </div>
    </>
}