import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SideBarSkills = (props) => {
    const data =  props.data;
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
      {data.map((elemts,i) => (
        <SwiperSlide className="flex flex-wrap " key={i}>
           
          <img src={elemts.img}  className="w-28 " alt="" />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};
