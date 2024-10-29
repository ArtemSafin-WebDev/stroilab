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
  });
}
