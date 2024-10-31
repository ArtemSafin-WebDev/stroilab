import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function fieldLab() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".field-lab")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });

      tl.from(".field-lab__card", {
        autoAlpha: 0,
        duration: 1.2,
        y: 70,
        ease: "power2.out",
      });
      tl.from(
        ".field-lab__heading",
        {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power2.out",
        },
        ">-=0.2"
      );
      tl.from(
        ".field-lab__text",
        {
          autoAlpha: 0,
          duration: 1,
          y: 20,
          ease: "power3.out",
        },
        "<"
      );
      tl.from(
        ".field-lab__link-wrapper",
        {
          autoAlpha: 0,
          duration: 1,
        },
        "<"
      );
    }, element);
  });
}
