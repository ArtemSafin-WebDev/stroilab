import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function labServices() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".lab-services")
  );

  elements.forEach((element) => {
    const textElement = element.querySelector<HTMLElement>(
      ".lab-services__text"
    );
    if (textElement) {
      const button = element.querySelector<HTMLButtonElement>(
        ".lab-services__text-btn"
      );
      button?.addEventListener("click", (event) => {
        event.preventDefault();
        textElement.classList.toggle("all-shown");
        ScrollTrigger.refresh();
      });
    }

    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });

      tl.from(".lab-services__heading", {
        autoAlpha: 0,
        duration: 1.2,
        y: 30,
        ease: "power3.out",
      });
      tl.from(
        ".lab-services__certificate",
        {
          autoAlpha: 0,
          duration: 1.2,
          scale: 0,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.from(
        ".lab-services__text",
        {
          autoAlpha: 0,
          duration: 1.2,

          ease: "power3.out",
        },
        "<+=0.6"
      );

      tl.from(
        ".lab-services__list-item",
        {
          autoAlpha: 0,
          duration: 1,
          stagger: 0.3,
          y: 30,
          ease: "power2.out",
        },
        ">-=0.8"
      );
    }, element);
  });
}
