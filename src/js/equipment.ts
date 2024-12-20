import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function equipment() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".equipment")
  );
  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const sliders = Array.from(
      element.querySelectorAll<HTMLElement>(".equipment__block-slider")
    );
    sliders.forEach((element) => {
      const container = element.querySelector<HTMLElement>(".swiper");
      if (!container) return;

      let instance: Swiper | null = null;

      let slideDuplicates: HTMLElement[] = [];
      const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          if (instance) instance.destroy();
          const slides = Array.from(
            container.querySelectorAll<HTMLElement>(".swiper-slide")
          );
          const wrapper = container.querySelector(".swiper-wrapper");
          if (slides.length < 4) {
            slideDuplicates = slides.map(
              (slide) => slide.cloneNode(true) as HTMLElement
            );
            wrapper?.append(...slideDuplicates);
          }
          instance = new Swiper(container, {
            slidesPerView: "auto",
            centeredSlides: true,
            loop: true,
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
        } else {
          if (instance) instance.destroy();
          if (slideDuplicates.length) {
            slideDuplicates.forEach((slide) => slide.remove());
            slideDuplicates = [];
          }

          instance = new Swiper(container, {
            slidesPerView: "auto",
            speed: 600,
            slidesPerGroup: 3,
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
        }
      };

      mql.addEventListener("change", handleWidthChange);

      handleWidthChange(mql);
    });

    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });
        tl.from(".equipment__heading", {
          autoAlpha: 0,
          duration: 0.8,
          y: 30,
          ease: "power3.out",
        });
        tl.from(
          ".equipment__text",
          {
            autoAlpha: 0,
            duration: 0.6,
            y: 30,
            ease: "power3.out",
          },
          "<+=0.4"
        );
        tl.from(".equipment__block", {
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.2,
          y: 50,
          ease: "power3.out",
        });
        tl.from(
          ".equipment__catalog-link",
          {
            autoAlpha: 0,
            duration: 0.8,
            y: 30,
            ease: "power3.out",
          },
          ">-=0.2"
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
        tl.from(".equipment__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 20,
          ease: "power2.out",
        });
        tl.from(
          ".equipment__text",
          {
            autoAlpha: 0,
            duration: 1.2,
            y: 20,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.from(
          ".equipment__block",
          {
            autoAlpha: 0,
            duration: 1.2,
            stagger: 0.2,
            y: 20,
            ease: "power3.out",
          },
          "<+=0.6"
        );
        tl.from(
          ".equipment__catalog-link",
          {
            autoAlpha: 0,
            duration: 1.2,

            ease: "power3.out",
          },
          "<+=0.6"
        );

        tl.timeScale(1.3);
      },
      element
    );
  });
}
