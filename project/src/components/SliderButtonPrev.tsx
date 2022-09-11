import React, { forwardRef } from "react";

import { useSwiper } from "swiper/react";

import { CaretLeft } from "phosphor-react";

import { Button } from "./Button";

export const SliderButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <Button
      style="carousel--btn left-4"
      type="button"
      icon={<CaretLeft size={32} weight="light" />}
      onClick={() => swiper.slideNext()}
    />
  );
};
