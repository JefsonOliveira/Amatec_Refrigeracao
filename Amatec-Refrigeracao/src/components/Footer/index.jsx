import Logo from "../../assets/logo/amatec1.png";
import SSL from "../../assets/SSL/ssl.png";
import Instagram from "../../assets/social/instagram.png";
import Whatsapp from "../../assets/social/whatsapp.png";
import Facebook from "../../assets/social/facebook.png";
import PropTypes from "prop-types";

function Footer() {
  // Função para abrir o link em uma nova janela
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const SocialLink = ({ url, icon: Icon }) => (
    <div className="flex items-center">
      <a
        onClick={() => handleLinkClick(url)}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Icon}
          alt="Social Icon"
          className="w-10 h-10 mr-2 cursor-pointer"
        />
      </a>
    </div>
  );

  SocialLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired, // Aqui está a validação para a propriedade 'icon'
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
            <div
              className="p-1 mb-6 md:mb-0 md:w-1/4 cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <a className="flex items-center">
                <img
                  src={Logo}
                  href=""
                  className="h-30 w-40 sm:h-20 sm:w-38 md:h-30 md:w-48 lg:h-30 lg:w-48"
                  alt="Amatec Refrigeração Logo"
                />
              </a>
            </div>
            <div className="p-1 mb-6 md:mb-0 md:w-1/4 flex items-center">
              <div className="flex items-center">
                <img
                  src={SSL}
                  alt="SSL Icon"
                  className="w-10 h-10 md:w-12 md:h-12 mr-2"
                />
                <SocialLink
                  url="https://www.instagram.com/amatec_refrigeracao_am/"
                  icon={Instagram}
                />
                <SocialLink
                  url="https://cutt.ly/Amatec-Refrigeracao-Site"
                  icon={Whatsapp}
                />
                <SocialLink url="https://www.facebook.com/share/W966RPLLmokP8Nxg/?mibextid=LQQJ4d" icon={Facebook} />
              </div>
            </div>
            <div className="md:w-3/4 md:flex md:items-center md:justify-center ml-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Endereço
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium cursor-pointer">
                    <li className="mb-4">
                      <a
                        onClick={() =>
                          handleLinkClick(
                            "https://maps.app.goo.gl/75QFrEHrAFwLD9xb6"
                          )
                        }
                        className="hover:underline"
                      >
                        Rua 14 nº.100 - Hileia - Manaus - AM
                      </a>
                    </li>
                  </ul>
                  <div style={{ marginRight: "10px" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1623544437125!2d-60.03667720000001!3d-3.0511655999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c114513decead%3A0x493670584f46b2d1!2zQW1hdGVjIFJlZnJpZ2VyYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1715090327864!5m2!1spt-BR!2sbr"
                      width="264"
                      height="150"
                      allowfullscreen=""
                      loading="lazy"
                      // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Contato
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium cursor-pointer">
                    <li className="mb-4">
                      <a
                        onClick={() =>
                          handleLinkClick(
                            "https://cutt.ly/Amatec-Refrigeracao-Site"
                          )
                        }
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
            <ul className="text-sm text-gray-500 dark:text-gray-400 font-medium cursor-pointer">
              <li className="mb-4">
                &copy; 2024{" "}
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
