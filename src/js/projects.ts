import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Select from "./classes/Select";

gsap.registerPlugin(ScrollTrigger);

export default function projects() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".projects")
  );

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const categories = element.querySelector<HTMLElement>(
      ".projects__categories"
    );

    if (categories) {
      new Select(categories);
    }
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline();
        tl.fromTo(
          ".projects__heading",
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
        tl.fromTo(
          ".projects__text",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".projects__categories",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".projects__list-item",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            stagger: 0.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".projects__show-more",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            duration: 1.2,

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
        const tl = gsap.timeline();
        tl.fromTo(
          ".projects__heading",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          }
        );
        tl.fromTo(
          ".projects__text",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".projects__categories",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".projects__list-item",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            stagger: 0.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.fromTo(
          ".projects__show-more",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            duration: 1.2,

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
