import { useSwiper } from "swiper/react";

import { CaretRight } from "phosphor-react";

import { Button } from "./Button";

export const SliderButtonNext = () => {
  const swiper = useSwiper();

  return (
    <Button
      style="carousel--btn right-4"
      type="button"
      icon={<CaretRight size={32} weight="light" />}
      onClick={() => swiper.slideNext()}
    />
  );
};
