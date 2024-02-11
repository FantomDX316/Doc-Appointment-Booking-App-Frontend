// ----------------------------------------------Imports-----------------------------------------------
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// ----------------------------------------------------------------------------------------------------
const FilterCarousel = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={3}
      spaceBetween={30}
    >
      <style jsx="true">
        {`
          .carouselImage {
            width: 100%;
            height: 50vh;
          }
        `}
      </style>
      {Array(4)
        .fill(0)
        .map(() => {
          return (
            <SwiperSlide style={{ textAlign: "center", padding: "50px" }}>
              <style jsx="true">
                {`
                  .filterCard {
                    border: 1px solid pink;
                    box-shadow: 3px 3px 8px 2px grey;
                    border-radius: 5px;
                    padding: 10px;
                    font-weight: bolder;
                    cursor: pointer;
                    color: blue;
                  }
                `}
              </style>
              <div className="filterCard">Filter</div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default FilterCarousel;
