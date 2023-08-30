import Logo from "../../images/amatec1.png";

function Header() {
  return (
    <div className="bg-[#0f4583] p-9 max-h-10 flex justify-between items-center">
      <div className="flex">
        <img className="h-48 w-48" src={Logo} alt="" />
        {/* <div className="">
          <h1>Amatec Refrigeração</h1>
          <h2>Assistência Técnica Especializada</h2>
        </div> */}
      </div>
      <div className="flex font-serif font-semibold text-[18px] text-white">
        <ul className="">
          <li className="">
            <a className="p-5" href="">
              Quem Somos
            </a>
          </li>
        </ul>
        <ul className="">
          <li className="">
            <a className="p-5" href="">
              O Que Fazemos
            </a>
          </li>
        </ul>
        <ul className="">
          <li className="">
            <a className="p-5" href="">
              Entre em Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
