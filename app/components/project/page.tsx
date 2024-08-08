import next from "next";
import "./styles.css"
import Image from "next/image";
import React from "react";
import { FaReact, FaHtml5, FaBootstrap, FaGithub, FaExternalLinkAlt, FaJava } from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { IoLogoIonic } from "react-icons/io";

const iconos: Record<string, React.ElementType> = {
    react: FaReact,
    html5: FaHtml5,
    bootstrap: FaBootstrap,
    nestjs: SiNestjs,
    nextjs: SiNextdotjs,
    typescript: SiTypescript,
    mysql: SiMysql,
    java: FaJava,
    ionic: IoLogoIonic,
};

interface Props {
    nombreProject: string;
    description: string;
    image: string;
    icono1: string;
    icono2: string;
    icono3: string;
    color: string;
}


function Project(props: Props) {

    const Icono1 = iconos[props.icono1];
    const Icono2 = iconos[props.icono2];
    const Icono3 = iconos[props.icono3];

    return (

        <div className="flex flex-col items-center justify-center grid grid-cols-2 containerproject" style={{ backgroundColor: props.color }}>
            <div className=" text-start CajaSuperior flex flex-col justify-center textosProject" style={{ zIndex: "2" }}>
                <h4 className="Textotituloproject distancia">
                    {props.nombreProject}
                </h4>
                <h3 className="distancia description">
                    {props.description}
                </h3>
                <div className="flex distancia paddinginterno" id="IconContainer">
                    {Icono1 ? <span className="radioEnvolve">{Icono1 && <Icono1 className="iconoReact" />}</span> : null}
                    {Icono2 ? <span className="radioEnvolve">{Icono2 && <Icono2 className="iconoReact" />}</span> : null}
                    {Icono3 ? <span className="radioEnvolve">{Icono3 && <Icono3 className="iconoReact" />}</span> : null}
                </div>
            </div >
            <div className="CajaSuperior flex justify-center items-center">
                <div className="ContainerImage grid" style={{ height: "75%", width: "100%" }}>
                    <div className="opacidadBlock" style={{ background: `linear-gradient(to right, ${props.color}, transparent)` }}> </div>
                    <Image src={`${props.image}`} alt="imagen" className="ImagenP" width={220} height={180} quality={100}/>
                </div>
            </div>
            <span className="IconoHovContainer" style={{ marginLeft: "17px"}}>
                <button>
                    <FaGithub></FaGithub>
                </button>
            
            </span>
            <span className="IconoHovContainer" style={{ marginLeft: "428px"}}>
                <button>
                    <FaExternalLinkAlt ></FaExternalLinkAlt>
                </button>
    
            </span>
            
        </div>
    );
}

export default Project;