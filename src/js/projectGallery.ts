import Swiper from "swiper";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function projectGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".project-gallery")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
        },
      });

      tl.from(".project-gallery__content", {
        autoAlpha: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    });

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
