import flocoNeveIcon from "../../assets/loading-Icon/floco-de-neve.gif";
import "./styles.css";

function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        src={flocoNeveIcon}
        className="animate-spin w-24 h-24 mb-8 sm:w-32 sm:h-32 md:w-48 md:h-48"
        alt="Ícone de floco de neve girando"
      />
      <div className="text-center">
        <div className="text-sm font-medium text-gray-800 mb-2">
          Carregando...
        </div>
        <div className="relative w-32 h-2 sm:w-48 sm:h-3">
          <div className="absolute top-0 left-0 h-full bg-blue-400 rounded-full animate-loading"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
