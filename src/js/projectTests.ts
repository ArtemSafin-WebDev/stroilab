import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function projectTests() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".project-tests")
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

        tl.from(".project-tests__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power2.out",
        });

        tl.from(
          ".project-tests__list-item",
          {
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.2,
            y: 30,
            ease: "power2.out",
          },
          0.6
        );
      },
      element
    );
  });
}
