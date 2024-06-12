import { FaGithub } from "react-icons/fa";
import { SiExpress, SiMapbox } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Icon({name} : {name : string}) {
    let icon = <></>;
    switch(name.toLowerCase()) {
        case "github":
            icon = <FaGithub/>;
            break;
        case "mapbox":
            icon = <SiMapbox/>
            break;
        case "react native":
            icon = <TbBrandReactNative/>
            break;
        case "express":
            icon = <SiExpress/>
    }
    return <div className="flex flex-row gap-1 items-center">{icon}<p>{name}</p></div>
}