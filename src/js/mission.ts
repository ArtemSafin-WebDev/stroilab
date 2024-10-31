import Swiper from "swiper";
import { Controller, EffectFade, Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/controller";

gsap.registerPlugin(ScrollTrigger);

export default function mission() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".mission")
  );

  elements.forEach((element) => {
    const bgContainer = element.querySelector<HTMLElement>(
      ".mission__card-bg .swiper"
    );
    const textContainer = element.querySelector<HTMLElement>(
      ".mission__card-text-slider .swiper"
    );

    if (!bgContainer || !textContainer) return;

    const bgInstance = new Swiper(bgContainer, {
      speed: 600,
      effect: "fade",
      modules: [Controller, EffectFade],
    });

    const mainInstance = new Swiper(textContainer, {
      speed: 600,
      effect: "fade",
      modules: [Controller, EffectFade, Navigation, Pagination],
      autoHeight: true,
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: element.querySelector<HTMLElement>(".mission__card-pagination"),
        type: "fraction",
        formatFractionCurrent: (number) => {
          return number.toString().padStart(2, "0");
        },
        formatFractionTotal: (number) => {
          return number.toString().padStart(2, "0");
        },
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".mission__card-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".mission__card-arrow--next"
        ),
      },
      on: {},
    });
    mainInstance.controller.control = bgInstance;
    bgInstance.controller.control = mainInstance;

    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });
      tl.from(".mission__heading", {
        autoAlpha: 0,
        duration: 1.2,
        y: 60,
        ease: "power3.out",
      });
      tl.from(
        ".mission__card",
        {
          autoAlpha: 0,
          duration: 1.2,

          ease: "power2.out",
        },
        ">-=0.6"
      );
    }, element);
  });
}
