import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export default function equipment() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".equipment")
  );

  elements.forEach((element) => {
    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".equipment__block-slider")
    );
    sliders.forEach((element) => {
      const container = element.querySelector<HTMLElement>(".swiper");
      if (!container) return;

      new Swiper(container, {
        slidesPerView: "auto",
        speed: 600,
        modules: [Navigation, Pagination],
        pagination: {
          el: element.querySelector<HTMLElement>(
            ".equipment__block-slider-pagination"
          ),
          type: "fraction",
        },
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".equipment__block-slider-arrow--prev"
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".equipment__block-slider-arrow--next"
          ),
        },
      });
    });
  });
}
