import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function naturalTest() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".natural-test")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });

      tl.from(".natural-tests__card", {
        autoAlpha: 0,
        duration: 1.2,
        y: 70,
        ease: "power2.out",
      });
      tl.from(
        ".natural-tests__heading",
        {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power2.out",
        },
        "<+=0.6"
      );
      tl.from(
        ".natural-tests__link-wrapper",
        {
          autoAlpha: 0,
          duration: 0.6,
        },
        "<"
      );
      tl.from(
        ".natural-tests__text",
        {
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
        },
        ">"
      );
      tl.from(
        ".natural-tests__list-item",
        {
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.2,
          y: 10,
          ease: "power2.out",
        },
        "<+=0.3"
      );
    }, element);
  });
}
