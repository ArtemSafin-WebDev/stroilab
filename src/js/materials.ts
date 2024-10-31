import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function materials() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".materials")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });
      tl.from(".materials__card", {
        autoAlpha: 0,
        duration: 1.2,
        y: 70,
        ease: "power2.out",
      });
      tl.from(
        ".materials__card-heading",
        {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power2.out",
        },
        ">-=0.6"
      );
      tl.from(
        ".materials__card-list-item",
        {
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.2,
          y: 15,
          ease: "power2.out",
        },
        "<+=0.2"
      );
      tl.from(
        ".materials__card-text",
        {
          autoAlpha: 0,
          duration: 1.2,

          ease: "power3.out",
        },
        "<"
      );

      tl.from(
        ".materials__card-categories-list-item",
        {
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.1,
          y: 15,
          ease: "power2.out",
        },
        "<"
      );
      tl.from(
        ".materials__card-link-wrapper",
        {
          autoAlpha: 0,
          duration: 0.6,
        },
        "<"
      );
    }, element);
  });
}
