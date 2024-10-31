import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function contactUs() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".contact-us")
  );

  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });

      tl.from(".contact-us__card", {
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
      });
      tl.from(
        ".contact-us__form",
        {
          autoAlpha: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "<"
      );
    }, element);
  });
}
