import Swiper from "swiper";
import "swiper/css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function testLab() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".test-lab")
  );
  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    let mm = gsap.matchMedia();
    const container = element.querySelector<HTMLElement>(".swiper");
    if (container) {
      let instance: Swiper | null = null;
      const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          if (instance) instance.destroy();
          instance = new Swiper(container, {
            slidesPerView: "auto",
            speed: 600,
          });
        } else {
          if (instance) instance.destroy();
          instance = null;
        }
      };

      mql.addEventListener("change", handleWidthChange);

      handleWidthChange(mql);
    }

    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".test-lab__card")
    );
    mm.add(
      "(min-width: 641px)",
      () => {
        const tl = gsap.timeline({
          // scrollTrigger: {
          //   trigger: element,
          //   start: "top bottom-=30%",
          // },
        });

        tl.to(".test-lab__heading", {
          autoAlpha: 1,
          duration: 1.2,
          y: 0,
          ease: "power2.out",
        });
        tl.to(
          ".test-lab__text",
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.to(
          ".test-lab__link",
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );

        cards.forEach((card, cardIndex) => {
          const amountElement = card.querySelector(
            ".test-lab__card-amount span"
          );
          if (!amountElement) return;
          const amount = parseInt(
            amountElement.textContent!.replace(/\s/g, ""),
            10
          );

          const obj = {
            value: 0,
          };

          const cardTl = gsap.timeline();

          cardTl.fromTo(
            card,
            {
              autoAlpha: 0,
              y: 40,
            },
            {
              y: 0,
              autoAlpha: 1,
              ease: "power2.out",
              duration: 1,
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
                amountElement.textContent = obj.value.toLocaleString(
                  "ru-RU",
                  {}
                );
              },
            },
            0
          );

          tl.add(cardTl, `<+=${cardIndex * 0.2}`);
        });
      },
      element
    );
    mm.add(
      "(max-width: 640px)",
      () => {
        const tl = gsap.timeline({});

        tl.to(".test-lab__heading", {
          autoAlpha: 1,
          duration: 1.2,
          y: 0,
          ease: "power2.out",
        });
        tl.to(
          ".test-lab__text",
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.to(
          ".test-lab__mobile-cerfificate",
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );
        tl.to(
          ".test-lab__link",
          {
            autoAlpha: 1,
            duration: 1.2,
            y: 0,
            ease: "power2.out",
          },
          "<+=0.6"
        );

        cards.forEach((card, cardIndex) => {
          const amountElement = card.querySelector(
            ".test-lab__card-amount span"
          );
          if (!amountElement) return;
          const amount = parseInt(
            amountElement.textContent!.replace(/\s/g, ""),
            10
          );

          const obj = {
            value: 0,
          };

          const cardTl = gsap.timeline();

          cardTl.fromTo(
            card,
            {
              autoAlpha: 0,
              y: 40,
            },
            {
              y: 0,
              autoAlpha: 1,
              ease: "power2.out",
              duration: 1,
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
                amountElement.textContent = obj.value.toLocaleString(
                  "ru-RU",
                  {}
                );
              },
            },
            0
          );

          tl.add(cardTl, `<+=${cardIndex * 0.2}`);
        });

        tl.timeScale(1.3);
      },
      element
    );
  });
}
