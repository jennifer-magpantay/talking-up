import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import { SliderButtonPrev } from "./SliderButtonPrev";
import { SliderButtonNext } from "./SliderButtonNext";
import { FormatedDataType } from "../types/types";

interface SliderProps {
  length?: number;
  data: FormatedDataType[];
}

export const Slider = ({ lenght, data }: SliderProps) => {
  return (
    <Swiper
      tag="ul"
      wrapperTag="li"
      spaceBetween={50}
      slidesPerView={2}
      navigation={{
        nextEl: ".carousel--btn left-4",
        prevEl: ".carousel--btn right-4",
      }}
      keyboard={{
        enabled: true,
      }}
      loop
      modules={[Keyboard, Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(({ id, title }) => (
        <SwiperSlide key={id}>{title}</SwiperSlide>
      ))}

      {/* custom buttons for navigation */}

      <SliderButtonPrev />
      <SliderButtonNext />
    </Swiper>
  );
};
