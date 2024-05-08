import Logo from "../../assets/logo/amatec1.png";

function Header() {
  return (
    <div className="bg-[#0f4583] p-4 md:p-9 lg:p-9 max-h-10 flex justify-between items-center">
      <div className="flex cursor-pointer">
        <img className="h-24 w-24 md:h-48 md:w-48" src={Logo} alt="" />
      </div>
      <div className="hidden md:flex lg:flex">
        <ul className="flex space-x-4">
          <li>
            <a className="p-2 text-[18px] text-white" href="#">
              Quem Somos
            </a>
          </li>
          <li>
            <a className="p-2 text-[18px] text-white" href="#">
              O Que Fazemos
            </a>
          </li>
          <li>
            <a className="p-2 text-[18px] text-white" href="#">
              Entre em Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;



//   // const scrollToSection = (sectionId) => {
//   //   const section = document.getElementById(sectionId);
//   //   if (section) {
//   //     section.scrollIntoView({ behavior: "smooth" });
//   //   }
//   // };
  

// <div className="bg-[#0f4583] p-4 md:p-9 lg:p-9 max-h-10 flex justify-between items-center">
//         <div className="flex cursor-pointer">
//           <img className="h-24 w-24 md:h-48 md:w-48" src={Logo} alt="" />
//         </div>
//         <div className="hidden md:flex lg:flex">
//           <ul className="flex space-x-4">
//             <li>
//               <a
//                 href="#quem-somos"
//                 className="p-2 text-[18px] text-white"
//                 onClick={() => scrollToSection("quem-somos")}
//               >
//                 Quem Somos
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#fazemos"
//                 className="p-2 text-[18px] text-white"
//                 onClick={() => scrollToSection("fazemos")}
//               >
//                 O Que Fazemos
//               </a>
//             </li>
//             <li>
//               <a className="p-2 text-[18px] text-white" href="#">
//                 Entre em Contato
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div> 
