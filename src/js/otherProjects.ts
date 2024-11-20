import Swiper from "swiper";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function otherProjects() {
  const mql = window.matchMedia("(max-width: 640px)");
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".other-projects")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=20%",
          },
        });

        tl.from(".other-projects__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power2.out",
        });

        tl.from(
          ".other-projects__slider-card",
          {
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.2,
            y: 30,
            ease: "power2.out",
          },
          "<+=0.6"
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
            start: "top bottom-=20%",
          },
        });

        tl.from(".other-projects__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 20,
          ease: "power2.out",
        });

        tl.from(
          ".other-projects__slider-card",
          {
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.2,
            y: 20,
            ease: "power2.out",
          },
          "<+=0.6"
        );

        tl.timeScale(1.3);
      },
      element
    );

    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
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
  });
}
