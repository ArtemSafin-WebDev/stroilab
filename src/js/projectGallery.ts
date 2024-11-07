import Swiper from "swiper";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function projectGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".project-gallery")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: 1,
      speed: 600,
      modules: [Navigation, Pagination, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".project-gallery__slider-pagination"
        ),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".project-gallery__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".project-gallery__slider-arrow--next"
        ),
      },
    });
  });
}
