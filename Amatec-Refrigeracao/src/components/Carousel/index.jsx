import "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import manutencaoGeladeiraMaquinaImagens from "../../assets/galeriaCarousel/manutencaoGeladeiraMaquina-imagens.jsx";

const {
  manutencaoGeladeira1,
  manutencaoMaquina1,
  manutencaoGeladeira2,
  manutencaoMaquina2,
  manutencaoGeladeira3,
  manutencaoMaquina3,
} = manutencaoGeladeiraMaquinaImagens;

function Carousel() {
  const data = [
    {
      id: "1",
      image: manutencaoGeladeira1,
    },
    {
      id: "2",
      image: manutencaoMaquina1,
    },
    {
      id: "3",
      image: manutencaoGeladeira2,
    },
    {
      id: "4",
      image: manutencaoMaquina2,
    },
    {
      id: "5",
      image: manutencaoGeladeira3,
    },
    {
      id: "6",
      image: manutencaoMaquina3,
    },
  ];

  return (
    <div>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt="Slider"
              className="w-full h-full md:h-auto max-h-[calc(100vh-72px)]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
