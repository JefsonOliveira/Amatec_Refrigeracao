// import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
// import Body from "../../components/Body";
import LoadingPage from "../../components/LoadingPage";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Marcas from "../../components/Marcas";
import Logo from "../../assets/logo/amatec1.png";
import WhatsappIcon from "../../assets/logo/whatsapp.png";
import { useEffect, useState } from "react";

function Home() {
  const [open, SetOpen] = useState(false);

  //Função para abrir o link em uma nova janela.
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Tempo de espera em milissegundos (2 seg)

    // Limpeza do temporizador quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <div className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between">
              <div
                className="flex right-4 cursor-pointer h-30 w-40 sm:h-20 sm:w-38 md:h-30 md:w-48 lg:h-30 lg:w-48"
                style={{ marginRight: "auto", marginLeft: "4rem" }}
                onClick={() => window.location.reload()}
              >
                <img className="" src={Logo} alt="" />
              </div>
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  data-collapse-toggle="navbar-user"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-user"
                  // aria-expanded={open}
                  onClick={() => SetOpen(!open)}
                >
                  <span className="sr-only z-50 ...">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
              </div>
              <div
                className={`items-center justify-between ${
                  open
                    ? "absolute z-50 top-[115px]  bg-white dark:bg-gray-900 md:p-9 max-h-10 flex justify-between items-center right-4"
                    : "hidden"
                } md:flex md:w-auto md:order-1`}
                id="navbar-user"
              >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="#Quem-Somos"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Quem Somos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#O-Que-Fazemos"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      O Que Fazemos
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleLinkClick("https://cutt.ly/Amatec-Refrigeracao-Site")
                      }
                      className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Entre em Contato
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Carousel />
          <div
            id="Quem-Somos"
            className="bg-gray-200 py-10 px-4 flex justify-center items-center"
          >
            <div className="bg-white p-8 rounded-lg shadow-md w-[800px]">
              <h2 className="text-2xl font-semibold mb-4">Quem Somos</h2>
              <p className="text-gray-700">
                Na Amatec Refrigeração, somos muito mais que uma empresa
                especializada em manutenção de geladeiras e lavadoras de roupas.
                Somos seu parceiro de confiança quando se trata de garantir o
                perfeito funcionamento dos seus aparelhos, independente da marca
                ou modelo.
              </p>
            </div>
          </div>
          <Card />
          <div
            id="O-Que-Fazemos"
            className="bg-gray-200 py-10 px-4 flex justify-center items-center"
          >
            <div className="bg-white p-8 rounded-lg shadow-md w-[800px]">
              <h2 className="text-2xl font-semibold mb-4">O que fazemos</h2>
              <p className="text-gray-700">
                Na Amatec Refrigeração, nos especializamos em manutenção e
                reparo de geladeiras e lavadoras de roupas, as mais variadas
                marcas e modelos. Nossa equipe altamente qualificada oferece
                serviços rápidos, peças de reposição de qualidade e soluções
                confiáveis para garantir que seus aparelhos funcionem
                perfeitamente. Conte conosco para cuidar do seu conforto e
                conveniência.
              </p>
            </div>
          </div>
          <Marcas />
          <div
            onClick={() =>
              handleLinkClick("https://cutt.ly/Amatec-Refrigeracao-Site")
            }
            className="cursor-pointer hover:underline"
          >
            <img
              className="z-10 h-16 w-16 md:h-28 md:w-28 fixed bottom-4 right-4"
              src={WhatsappIcon}
            />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
