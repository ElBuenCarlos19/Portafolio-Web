'use client';

import "./globals.css";
import Navbar from "./components/navbar/page";
import Skills from "./components/skills/page";
import Cubo from "./components/cubo/page";
import Project from "./components/project/page";
import Input from "./components/input/page";
import { josefin_sans, fira_sans_condensed } from "../_scripts/fonts"; 
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <header className="header">

        <Navbar></Navbar>

        <div className="cubos">
          <Cubo left={50} top={38} rotateY={45} rotateX={45} rotateZ={0} tamaño={100}></Cubo>
          <Cubo left={32} top={29} rotateY={15} rotateX={0} rotateZ={0} tamaño={180}></Cubo>
          <Cubo left={37.55} top={21.4} rotateY={84} rotateX={0} rotateZ={0} tamaño={50}></Cubo>
          <Cubo left={57.7} top={53} rotateY={35} rotateX={0} rotateZ={0} tamaño={25}></Cubo>
          <Cubo left={57.57} top={51.8} rotateY={35} rotateX={0} rotateZ={15} tamaño={15}></Cubo>
          <Cubo left={47.6} top={1} rotateY={50} rotateX={19} rotateZ={36} tamaño={155}></Cubo>
          <Cubo left={70.15} top={15.2} rotateY={0} rotateX={35} rotateZ={76} tamaño={208}></Cubo>
          <Cubo left={75.4} top={51.5} rotateY={78} rotateX={0} rotateZ={0} tamaño={34}></Cubo>
          <Cubo left={30.2} top={15.4} rotateY={25} rotateX={0} rotateZ={0} tamaño={88.5}></Cubo>
          <Cubo left={21.72} top={40} rotateY={46} rotateX={75} rotateZ={25} tamaño={93}></Cubo>
          <Cubo left={36.12} top={10.4} rotateY={14} rotateX={15} rotateZ={65} tamaño={54.5}></Cubo>
        </div>
        <section className="TextoTitulo relative">

          <div className="flex text-center justify-center items-center flex-col w-full" style={{ marginTop: "100px" }}>
            <h1 className={`Titulo ${josefin_sans.className}`}>Carlos Peralta</h1>
            <h3 className={`Subtitulo ${fira_sans_condensed.className}`}>Computer Engineer, Web & App Developer</h3>


          </div>
          <div className="flex justify-center">
            {/* <img src="/retrato.png" alt="" className="FotoPerfil" /> */}
          </div>
        </section>

      </header>
      <section className="TextoDescripcion">
        {/* <svg width="1200" height="1200" className="svgclase absolute">
          <circle cx="40" cy="840" r="90" fill="none" stroke="white" strokeWidth="1" />
          <line x1="220" y1="950" x2="25" y2="650" stroke="white" stroke-width="1" />
          <rect opacity="1" x="10.4252" y="-506.8326" width="7.50168" height="7.50168" transform="rotate(110.283 10.4252 75.8326)" fill="none" stroke="white" stroke-width="1.22683" />
          <rect opacity="1" x="-170.4252" y="-506.8326" width="7.50168" height="7.50168" transform="rotate(110.283 10.4252 75.8326)" fill="none" stroke="white" stroke-width="1.22683" />
          <rect opacity="1" x="180.869" y="-443.825" width="7.50168" height="7.50168" transform="rotate(110.283 180.869 138.825)" fill="none" stroke="white" stroke-width="1.22683" />
          <rect opacity="1" x="0.069" y="-443.825" width="7.50168" height="7.50168" transform="rotate(110.283 180.869 138.825)" fill="none" stroke="white" stroke-width="1.22683" />
          <rect x="650.4713" y="-91.84" width="180.485" height="180.485" transform="rotate(20.2832 69.4713 -91.84)" stroke="white" stroke-opacity="1" stroke-width="1.22683" />


        </svg> */}
        <div className="planet">
        </div>
        <h3 className={`descripcion ${josefin_sans.className} z-10`}>As a computer engineer, my passion is to design and develop robust, scalable products that not only meet user technical requirements, but will also deliver exceptional experiences.</h3>
      </section>

      <section className="skills">
        <div>
          <h1 className={`Expertise ${josefin_sans.className}`}>My Expertise</h1>
        </div>
        <div className="grid grid-cols-3 p-4 skillsroute">
          <Skills title="Software Development" paragraph="I excel in different programming languages, focusing on scalable and efficient backend applications with clean and easy to maintain code." image="/Softwaredev.png" image1="/lenguajes/Python.png" image2="/lenguajes/Java.png" image3="/lenguajes/Javascript.png" image4="/lenguajes/typescript.png" image5="/lenguajes/C++.png" image6="/lenguajes/Php.png" icono="Code"></Skills>
          <Skills title="Frontend Development" paragraph="I specialize in creating interactive and responsive UIs for web and mobile devices with superior user experiences using frameworks." image="/Frontendev.png" image1="/lenguajes/React.png" image2="/lenguajes/Next.png" image3="/lenguajes/Ionic.png" image4="/lenguajes/Html.png" image5="/lenguajes/Css.png" image6="/lenguajes/Tailwind.png" icono="Computer"></Skills>
          <Skills title="Database Administrator" paragraph="I am good at relational database administration by designing schemas, managing databases and optimizing performance." image="/DBAdev.png" image1="/lenguajes/WorkBench.png" image2="/lenguajes/Mariadb.png" image3="/lenguajes/MongoDB.png" image4="" image5="" image6="" icono="Database"></Skills>
          <span className="scrollHabilidades gap-4">

            <div className="slide ">
              <Image src="/lenguajes/Bootstrap.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/C++.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Css.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Html.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Ionic.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Java.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Javascript.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Mariadb.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/MongoDB.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Next.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Php.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Python.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/React.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Tailwind.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Typescript.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Workbench.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Bootstrap.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/C++.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Css.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Html.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Ionic.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Java.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Javascript.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/Mariadb.png" alt="" width={120} height={150} />
            </div>
            <div className="slide">
              <Image src="/lenguajes/MongoDB.png" alt="" width={120} height={150} />
            </div>

            <div className="slide">
              <Image src="/lenguajes/Next.png" alt="" width={120} height={150} />
            </div>
          </span>
        </div>
      </section>

      <section style={{ marginBottom: "100px" }}>
        <div className="text-center">
          <h2 className={`Expertise ${josefin_sans.className}`}>Projects</h2>
          
        </div>
        <div className="grid grid-cols-2 items-center justify-items-center" style={{ padding: "20px 150px" }}>
          <Project nombreProject="Pagina Web Informativa" description="Pagina informativa de un gestor de muestras de proyectos de la universidad" icono1="html5" icono2="bootstrap" icono3="" color="#0e0d32" image="/projects/project1.png"></Project>
          <Project nombreProject="Login Con Api" description="Conexion entre un frontend, una api y una base de datos basica." icono1="nextjs" icono2="nestjs" icono3="mysql" color="#18311C" image="/projects/project2.png"></Project>
          <Project nombreProject="Proyecto de prueba" description="No tengo muchos mas XD osea si tengo pero esos dos son los unicos decentes" icono1="ionic" icono2="java" icono3="" color="#149d8e" image="/projects/favicon.webp"></Project>
          <Project nombreProject="Ojala con colapse el grid" description="Look what you made me do" icono1="html5" icono2="react" icono3="" color="#755cde" image="/projects/project4.png"></Project>
        </div>
      </section>

      <footer className="grid grid-cols-4 justify-items-center align-items-center" style={{ backgroundColor: "#2f2d33", height: "300px" }}>
        <div className="grid grid-rows-4 p-4">
          <div className="grid row-span-3 grid-cols-2 justify-items-center">
            <Image src="/profile.jpeg" alt="" width={130} height={100} />
            <div style={{ marginLeft: "-0px" }}>
              <h3 className="text-white">
                Carlos Peralta <br />
                19 years old <br />
                Computer Engineer <br />
                Colombian
              </h3>
            </div>
          </div>
          <div className="RedesSociales grid grid-cols-4 ">
            <button><Image src={"/redes/instagram.png"} alt="instagram" width={50} height={50} /></button>
            <button><Image src={"/redes/github.png"} alt="twitter" width={50} height={50} /></button>
            <button><Image src={"/redes/linkedin.png"} alt="linkedin" width={50} height={50} /></button>
            <button><Image src={"/redes/messenger.png"} alt="messenger" width={50} height={50} /></button>
          </div>
        </div> 
        <div className="justify-items-center col-span-2">
          <div className="flex">
          <form action="" className="flex flex-col justify-center aling-items-center" style={{marginTop: "15px"}}>
            <div className="grid grid-cols-2 gap-4">
            <Input text="Email" wit={100}></Input>
            <Input text="Name" wit={100} ></Input>
            <Input text="Message" wit={206} ></Input>
            </div>
            <button type="submit" className="button-general text-white" style={{marginTop: "15px", height: "50px"}}>Shoot Message</button>
          </form>
          </div>
          
        </div>
        <div className={`${josefin_sans.className} text-left text-3xl text-gray-400`} style={{marginTop: "30px"}}>
            "No tengo nada que decir, <br />espero algun dia <br />pueda decir algo <br /> <strong>importante</strong>"
          </div>
      </footer>
    </main>

  );
}
