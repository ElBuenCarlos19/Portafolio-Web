import  "./styles.css";
import Image from "next/image";
import { josefin_sans } from "../../../_scripts/fonts.js";
import { FaCode, FaDatabase } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";


const iconos: Record<string, React.ElementType> = {
  Code: FaCode,
  Computer: HiOutlineDesktopComputer,
  Database: FaDatabase,
};
interface Props {
  title: string;
  paragraph: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  icono: string;
}

function Skills(props: Props) {

  const Icono = iconos[props.icono];;
  return (
    <div className="square p-4">
      <div className="flex items-center justify-center gap-7">
      {Icono && <Icono style={{color: "white", fontSize: "50px"}}></Icono>}
        <h1 className={`${josefin_sans.className} text-left text-4xl`}>{props.title}</h1>
      </div>
      <div className="flex p-10 gap-5">
        <span className="bg-white lineaDecorativa" style={{ width: "2px", opacity: "0.5"}}></span>
      <p className="text-left">{props.paragraph}</p>

      </div>
    </div>
  );
}

export default Skills;