import "./styles.css";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex justify-center vidrioeffect">
      <div className="Nombre justify-start">
        <Image src="/Logo.png" alt="Logo" width={100} height={100}/>
      </div>
      <div className="flex w-full justify-center ">
        <ul className="flex items-center justify-center h-full gap-5">
          <li><a href="" className="p-5 decorator">Home</a></li>
          <li><a href="" className="p-5 decorator">Expertise</a></li>
          <li><a href="" className="p-5 decorator">Projects</a></li>
          <li><a href="" className="p-5 decorator">Experience</a></li>
          <li><a href="" className="p-5 decorator">Contact</a></li>
        </ul>
      </div>
    </nav>

    // <button className={styles.menubutton}>
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="size-6">
    //         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //       </svg>
    //     </button>
  );
}

export default Navbar;