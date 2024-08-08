import { Josefin_Sans, Fira_Sans_Condensed } from "next/font/google";

   const josefin_sans = Josefin_Sans({
        subsets: ["latin"],
        weight: ["400", "700"]
      });
     


    
      const fira_sans_condensed = Fira_Sans_Condensed({
        subsets: ["latin"], 
        weight: ["400", "700"], 
      });

export { josefin_sans, fira_sans_condensed };