import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function projectDescription() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".project-description")
  );

  elements.forEach((element) => {
    const button = element.querySelector<HTMLButtonElement>("button");
    button?.addEventListener("click", (event) => {
      event.preventDefault();
      button.parentElement?.classList.toggle("show-all");
    });
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

        tl.from(".project-description__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power2.out",
        });

        tl.from(
          ".project-description__text",
          {
            autoAlpha: 0,
            duration: 1.2,
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
