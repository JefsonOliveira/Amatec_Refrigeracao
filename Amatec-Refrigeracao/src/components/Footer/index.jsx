import Logo from "../../assets/logo/amatec1.png";

function Footer() {

    // Função para abrir o link em uma nova janela
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="">
        <div className="text-gray-800 mx-auto text-center p-4">
          <p>
            Nossa missão é tornar sua vida mais fácil. Oferecemos serviços de
            alta qualidade diretamente no conforto da sua casa, proporcionando
            conveniência e praticidade incomparáveis.
          </p>
        </div>
      </div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 p-4 md:py-3 lg:py-4">
          <div className="md:flex md:justify-between">
            <div className="p-1 mb-6 md:mb-0 md:w-1/4">
              <a className="flex items-center">
                <img
                  src={Logo}
                  className="h-24 w-24 md:h-48 md:w-48"
                  alt="Amatec Refrigeração Logo"
                />
              </a>
            </div>
            <div className="md:w-3/4 md:flex md:items-center md:justify-center ml-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Endereço
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Rua 14 nº.100 - Hileia - Manaus - AM
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Contato
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/JefsonOliveira"
                        className="hover:underline"
                      >
                        (92) 99118-9889 - WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2 border-t border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          <div className="flex items-center justify-center">
            <ul className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                © 2023{" "}
                <a
                  onClick={() =>
                    handleLinkClick("https://github.com/JefsonOliveira")
                  }
                  className="cursor-pointer hover:underline"
                >
                  JefsonOliveira -
                </a>
                Todos os direitos reservados.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
