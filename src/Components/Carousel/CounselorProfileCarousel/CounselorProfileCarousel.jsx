// ----------------------------------------------Imports-----------------------------------------------
import React from "react";
import CarouselDummyImage from "../../../Assets/Images/caroselDummyImage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// ----------------------------------------------------------------------------------------------------

const CounselorProfileCarousel = () => {
  // ----------------------------------------------Hooks-------------------------------------------------
  // ----------------------------------------------------------------------------------------------------
  // ---------------------------------------------States-------------------------------------------------
  // ----------------------------------------------------------------------------------------------------
  // --------------------------------------------Functions-----------------------------------------------
  // ----------------------------------------------------------------------------------------------------
  // --------------------------------------------useEffects----------------------------------------------
  // ----------------------------------------------------------------------------------------------------
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
            <SwiperSlide>
              <img src={CarouselDummyImage} className="carouselImage" />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default CounselorProfileCarousel;
