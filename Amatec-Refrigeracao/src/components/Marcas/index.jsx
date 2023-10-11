import MarcasLogo from "../../assets/galeriaMarcas/Macas-imagens";

const {
  BrastempLogo,
  ColormaqLogo,
  ConsulLogo,
  ContinentalLogo,
  ElectroluxLogo,
  LGLogo,
  PanasonicLogo,
  SamsungLogo,
} = MarcasLogo;

function Marcas() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-1">
      <div className="flex items-center justify-center">
        <img src={BrastempLogo} alt="Logo Brastemp" style={{ width: '100px', height: '100px' }} />
      </div>
      <div className="flex items-center justify-center">
        <img src={ColormaqLogo} alt="Logo Colormaq" className="max-w-full h-auto" />
      </div>
      <div className="flex items-center justify-center">
        <img src={ConsulLogo} alt="Logo Consul" className="max-w-full h-auto" />
      </div>
      <div className="flex items-center justify-center">
        <img src={ContinentalLogo} alt="Logo Continental" className="max-w-full h-auto" />
      </div>
      <div className="flex items-center justify-center">
        <img src={ElectroluxLogo} alt="Logo Electrolux" className="max-w-full h-auto" />
      </div>
      <div className="flex items-center justify-center">
        <img src={LGLogo} alt="Logo LG" className="max-w-full h-auto" />
      </div>
      <div className="flex items-center justify-center">
        <img src={PanasonicLogo} alt="Logo Panasonic" className="max-w-full h-auto" />
      </div>
      <div className="flex items-center justify-center">
        <img src={SamsungLogo} alt="Logo Samsung" className="max-w-full h-auto" />
      </div>
      {/* Adicione mais logotipos conforme necessário */}
    </div>
  );
}

export default Marcas;
