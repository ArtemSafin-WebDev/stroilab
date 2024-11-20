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
    const slides = Array.from(
      element.querySelectorAll<HTMLElement>(".swiper-slide")
    );
    const wrapper = container?.querySelector(".swiper-wrapper");
    let clonedSlides: HTMLElement[] = [];
    if (container) {
      const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          if (instance) instance.destroy();
          if (clonedSlides.length) {
            clonedSlides.forEach((slide) => slide.remove());
            clonedSlides = [];
          }
          if (slides.length <= 4) {
            clonedSlides = slides.map(
              (slide) => slide.cloneNode(true) as HTMLElement
            );
            wrapper?.append(...clonedSlides);
          }
          instance = new Swiper(container, {
            slidesPerView: "auto",
            centeredSlides: true,
            loop: true,
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
        } else {
          if (instance) instance.destroy();
          if (clonedSlides.length) {
            clonedSlides.forEach((slide) => slide.remove());
            clonedSlides = [];
          }
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
    mm.add(
      "(max-width: 640px)",
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
          y: 20,
          ease: "power2.out",
        });
        tl.from(
          ".clients__text",
          {
            autoAlpha: 0,
            duration: 1.2,
            y: 20,
            ease: "power2.out",
          },
          "<+=0.6"
        );

        tl.from(
          ".clients__slider",
          {
            autoAlpha: 0,
            duration: 1.2,
            y: 20,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.from(
          ".clients__arrows",
          {
            autoAlpha: 0,
            duration: 1.2,
            y: 20,
            ease: "power2.out",
          },
          "<+=0.6"
        );

        tl.timeScale(1.3);
      },
      element
    );
  });
}
