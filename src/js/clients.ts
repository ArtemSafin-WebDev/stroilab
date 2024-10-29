import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function clients() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".clients")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".clients__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".clients__arrow--next"
        ),
      },
    });
  });
}
