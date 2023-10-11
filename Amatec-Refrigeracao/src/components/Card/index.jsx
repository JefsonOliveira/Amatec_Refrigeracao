import GeladeiraMaquinaImagens from "../../assets/galeriaCard/GeladeiraMaquina-imagens";

const {
  GeladeiraFechada,
  GeladeiraAberta,
  GeladeiraEntreAberta,
  LavadouraBranca,
  LavadouraInox,
  LavadouraClassica,
} = GeladeiraMaquinaImagens;

function Card() {
  return (
    <div className="grid bg-gray-200 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-900 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-full"
            src={GeladeiraFechada}
            alt="Hollywood Sign on The Hill"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Manutenção Preventica da Geladeira
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            A chave para uma geladeira sempre funcionando bem é a manutenção
            preventiva. Limpe as bobinas do condensador regularmente, verifique
            as vedações da porta e substitua o filtro de água conforme
            necessário. Isso garante que sua geladeira permaneça eficiente e
            confiável.
          </p>
        </div>
      </div>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-900 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-full"
            src={GeladeiraAberta}
            alt="Palm Springs Road"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Dicas para Conservação da Geladeira
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Mantenha seus alimentos frescos e seguros seguindo algumas dicas
            simples. Verifique a temperatura regularmente, não sobrecarregue a
            geladeira e evite obstruir as saídas de ar. Uma geladeira bem
            conservada é essencial para uma cozinha saudável.
          </p>
        </div>
      </div>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(236, 1, 1, 0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-900 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-full"
            src={GeladeiraEntreAberta}
            alt="Skyscrapers"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Economia de Energia com Sua Geladeira
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Quer economizar energia e dinheiro? Certifique-se de que a borracha
            de vedação da porta esteja em boas condições, ajuste a temperatura
            para o nível certo e não deixe a porta aberta por muito tempo.
            Pequenos hábitos podem fazer uma grande diferença na sua conta de
            energia.
          </p>
        </div>
      </div>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-900 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-full"
            src={LavadouraBranca}
            alt="Los Angeles Skyscrapers"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Cuidados Essenciais com Sua Lavadora
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Para manter sua lavadora funcionando perfeitamente, verifique
            periodicamente as mangueiras de água e evite sobrecarregar a
            máquina. Lembre-se de limpar o filtro regularmente e use produtos de
            limpeza adequados para evitar o acúmulo de resíduos.
          </p>
        </div>
      </div>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-900 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-full"
            src={LavadouraInox}
            alt="Los Angeles Skyscrapers"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Lavagem Eficiente para Roupas Impecáveis
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            A qualidade da lavagem de suas roupas depende do cuidado com sua
            lavadora. Separe roupas por cor e tipo de tecido, use a quantidade
            certa de detergente e siga as orientações do fabricante. Suas roupas
            vão agradecer.
          </p>
        </div>
      </div>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-900 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-full"
            src={LavadouraClassica}
            alt="Los Angeles Skyscrapers"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Resolvendo Problemas Comuns na Lavadora
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Às vezes, problemas menores podem afetar o desempenho da sua
            lavadora. Se você notar vazamentos, ruídos estranhos ou problemas na
            centrifugação, consulte o manual do proprietário ou chame um de
            nossos técnico para uma avaliação e reparos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
