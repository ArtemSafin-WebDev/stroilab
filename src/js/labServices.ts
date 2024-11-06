import Swiper from "swiper";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function labServices() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".lab-services")
  );
  const mql = window.matchMedia("(max-width: 640px)");
  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const container = element.querySelector<HTMLElement>(".swiper");
    if (container) {
      let instance: Swiper | null = null;
      const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          if (instance) instance.destroy();
          instance = new Swiper(container, {
            slidesPerView: "auto",
            speed: 600,
          });
        } else {
          if (instance) instance.destroy();
          instance = null;
        }
      };

      mql.addEventListener("change", handleWidthChange);

      handleWidthChange(mql);
    }
    const textElement = element.querySelector<HTMLElement>(
      ".lab-services__text"
    );
    if (textElement) {
      const button = element.querySelector<HTMLButtonElement>(
        ".lab-services__text-btn"
      );
      button?.addEventListener("click", (event) => {
        event.preventDefault();
        textElement.classList.toggle("all-shown");
        ScrollTrigger.refresh();
      });
    }

    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=20%",
          },
        });

        tl.from(".lab-services__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power3.out",
        });
        tl.from(
          ".lab-services__certificate",
          {
            autoAlpha: 0,
            duration: 1,
            scale: 0.9,
            ease: "power2.inOut",
          },
          "<"
        );
        tl.from(
          ".lab-services__text",
          {
            autoAlpha: 0,
            duration: 1.2,

            ease: "power3.out",
          },
          "<+=0.6"
        );

        tl.from(
          ".lab-services__list-item",
          {
            autoAlpha: 0,
            duration: 1,
            stagger: 0.3,
            y: 30,
            ease: "power2.out",
          },
          ">-=0.8"
        );
      },
      element
    );
  });
}
