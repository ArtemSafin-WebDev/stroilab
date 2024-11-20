import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function actions() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".actions")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=30%",
          },
        });

        tl.from(".actions__list-item", {
          y: 60,
          autoAlpha: 0,
          duration: 1.2,
          stagger: 0.6,
          ease: "power3.out",
        });
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

        tl.from(".actions__list-item", {
          y: 40,
          autoAlpha: 0,
          duration: 1.2,
          stagger: 0.6,
          ease: "power3.out",
        });

        tl.timeScale(1.3);
      },
      element
    );
  });
}
