import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {skills} from "../../data/Skills";

import Certificacion1 from "../../accest/Img/Skills/css.png";
import Certificacion2 from "../../accest/Img/Skills/html.png";
import Certificacion3 from "../../accest/Img/Skills/java.png";
import Certificacion4 from "../../accest/Img/Skills/javascript.png";
import Certificacion5 from "../../accest/Img/Skills/mongodb.png";
import Certificacion6 from "../../accest/Img/Skills/mysql.png";
import Mision from "../../accest/Img/Skills/react.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SideBarSkills = () => {
    console.log(skills)
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      className="select-none"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {skills.map((elemts,i) => (
        <SwiperSlide className="flex flex-wrap " key={i}>
          <img src={skills[i].img} className="w-28 " alt="" />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};
