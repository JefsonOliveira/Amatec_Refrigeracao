import Logo from "../../assets/logo/amatec1.png";

function Header() {
  return (
    <div className="bg-[#0f4583] p-4 md:p-9 lg:p-9 max-h-10 flex justify-between items-center">
      <div className="flex cursor-pointer">
        <img className="h-24 w-24 md:h-48 md:w-48" src={Logo} alt="Logo Amatec" />
      </div>
      <div className="hidden md:flex lg:flex justify-end flex-grow">
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
