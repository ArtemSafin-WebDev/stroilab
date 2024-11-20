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

        tl.fromTo(
          ".project-tests__heading",
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power2.out",
          }
        );

        tl.fromTo(
          ".project-tests__list-item",
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.2,
            y: 0,
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

        tl.fromTo(
          ".project-tests__heading",
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power2.out",
          }
        );

        tl.fromTo(
          ".project-tests__list-item",
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.2,
            y: 0,
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
