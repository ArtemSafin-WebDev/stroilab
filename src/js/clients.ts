import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function clients() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".clients")
  );
  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const container = element.querySelector<HTMLElement>(".swiper");
    let instance: Swiper | null = null;
    if (container) {
      const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          if (instance) instance.destroy();
          instance = new Swiper(container, {
            slidesPerView: "auto",
            centeredSlides: true,
            loop: true,
            speed: 600,
          });
        } else {
          if (instance) instance.destroy();
          instance = new Swiper(container, {
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
        }
      };

      mql.addEventListener("change", handleWidthChange);

      handleWidthChange(mql);
    }

    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });
        tl.from(".clients__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power3.out",
        });
        tl.from(
          ".clients__text",
          {
            autoAlpha: 0,
            duration: 1,

            ease: "power3.out",
          },
          "<+=0.6"
        );
        tl.from(
          ".clients__arrows",
          {
            autoAlpha: 0,
            duration: 1,

            ease: "power3.out",
          },
          "<"
        );
        tl.from(
          ".clients__slider-card",
          {
            autoAlpha: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "<+=0.4"
        );
      },
      element
    );
  });
}
