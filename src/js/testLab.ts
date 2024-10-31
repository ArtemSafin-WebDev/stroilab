import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function testLab() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".test-lab")
  );

  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".test-lab__card")
    );
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });

      cards.forEach((card, cardIndex) => {
        const amountElement = card.querySelector(".test-lab__card-amount span");
        if (!amountElement) return;
        const amount = parseInt(
          amountElement.textContent!.replace(/\s/g, ""),
          10
        );

        const obj = {
          value: 0,
        };

        const cardTl = gsap.timeline();

        cardTl.from(
          card,
          {
            autoAlpha: 0,
            duration: 1,
            y: 40,
            ease: "power2.out",
          },
          0
        );

        cardTl.to(
          obj,
          {
            value: amount,
            ease: "none",
            snap: "value",
            duration: 1,
            onUpdate: () => {
              amountElement.textContent = obj.value.toLocaleString("ru-RU", {});
            },
          },
          0
        );

        tl.add(cardTl, `<+=${cardIndex * 0.2}`);
      });
    }, element);
  });
}
