import { Draggable } from "gsap/all";
import { debounce } from "lodash";
import { InertiaPlugin } from "./plugins/InertiaPlugin.js";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger);

export default function servicePrice() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".service-price")
  );

  elements.forEach((element) => {
    const table = element.querySelector<HTMLElement>(".service-price__table");
    const tableWrapper = element.querySelector<HTMLElement>(
      ".service-price__table-wrapper"
    );
    if (table && tableWrapper) {
      let mm = gsap.matchMedia();
      mm.add("(max-width: 640px)", () => {
        const calcPadding = () => {
          const comp = window.getComputedStyle(table);

          return parseFloat(comp.getPropertyValue("padding-left"));
        };

        const calcLeft = () => {
          return (
            -1 * (tableWrapper.offsetWidth - window.innerWidth + calcPadding())
          );
        };
        const calcWidth = () => {
          return tableWrapper.offsetWidth + calcLeft() * -1 + calcPadding();
        };
        let prevWindowWidth = window.innerWidth;

        const instances = Draggable.create(tableWrapper, {
          type: "x",
          inertia: true,
          bounds: {
            left: calcLeft(),
            width: calcWidth(),
          },
        });

        const handler = debounce(() => {
          if (prevWindowWidth === window.innerWidth) return;
          const instance = instances[0];
          instance.applyBounds({
            left: calcLeft(),
            width: calcWidth(),
          });
          prevWindowWidth = window.innerWidth;
        }, 300);

        window.addEventListener("resize", handler);

        return () => {
          window.removeEventListener("resize", handler);
        };
      });
    }

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

        tl.from(".service-price__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 30,
          ease: "power2.out",
        });

        tl.from(
          ".service-price__list-item",
          {
            autoAlpha: 0,
            duration: 0.8,
            y: 30,
            stagger: 0.2,
            ease: "power2.out",
          },
          0.6
        );

        tl.from(
          ".service-price__table",
          {
            autoAlpha: 0,
            duration: 1.2,
            y: 30,
            ease: "power2.out",
          },
          ">-=0.2"
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

        tl.from(".service-price__heading", {
          autoAlpha: 0,
          duration: 1.2,
          y: 20,
          ease: "power2.out",
        });

        tl.from(
          ".service-price__list-item",
          {
            autoAlpha: 0,
            duration: 0.8,
            y: 20,
            stagger: 0.2,
            ease: "power2.out",
          },
          "<+=0.6"
        );

        tl.from(
          ".service-price__table",
          {
            autoAlpha: 0,
            duration: 1.2,
            y: 20,
            ease: "power2.out",
          },
          "<+=0.6"
        );
      },
      element
    );
  });
}
