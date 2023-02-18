import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Mision from "../accest/Img/Certificacion1.jpg";
import Certificacion1 from "../accest/Img/Certificacion1.jpg";
import Certificacion2 from "../accest/Img/Certificacion2.jpg";
import Certificacion3 from "../accest/Img/Certificacion3.jpg";
import Certificacion4 from "../accest/Img/Certificacion4.jpg";
import Certificacion5 from "../accest/Img/Certificacion5.jpg";
import Certificacion6 from "../accest/Img/Certificacion6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SliderPhotos = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      className="select-none"
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="flex flex-wrap   ">
        <img src={Certificacion1} className=" " alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Certificacion2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Certificacion3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Certificacion4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Certificacion5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Certificacion6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Mision} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
