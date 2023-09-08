import "../../App";
import { Swiper, SwiperSlide } from "swiper/react";

function Carousel() {
  const data = [
    {
      id: "1",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png",
    },
    {
      id: "2",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png",
    },
    {
      id: "3",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png",
    },
    {
      id: "4",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png",
    },
  ];

  return (
    <div>
      <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img 
            src={item.image} 
            alt="Slider" 
            className="w-full h-[calc(100vh-72px)]" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
