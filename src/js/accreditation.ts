import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function accreditation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".accreditation")
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
        tl.fromTo(
          ".accreditation__card",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          }
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
        tl.fromTo(
          ".accreditation__card",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          }
        );
        tl.timeScale(1.3);
      },
      element
    );
  });
}
