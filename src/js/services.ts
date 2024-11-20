import { Draggable } from "gsap/all";
import { debounce } from "lodash";
import { InertiaPlugin } from "./plugins/InertiaPlugin.js";
import gsap from "gsap";

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function services() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".services")
  );

  elements.forEach((element) => {
    const table = element.querySelector<HTMLElement>(".services__table");
    const tableWrapper = element.querySelector<HTMLElement>(
      ".services__table-wrapper"
    );
    if (table && tableWrapper) {
      let mm = gsap.matchMedia();
      mm.add(
        "(min-width: 641px)",
        () => {
          const tl = gsap.timeline();
          tl.fromTo(
            ".services__heading",
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
            ".services__text",
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
            ".services__table",
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
          const calcPadding = () => {
            const comp = window.getComputedStyle(table);

            return parseFloat(comp.getPropertyValue("padding-left"));
          };

          const calcLeft = () => {
            return (
              -1 *
              (tableWrapper.offsetWidth - window.innerWidth + calcPadding())
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

          const tl = gsap.timeline();
          tl.fromTo(
            ".services__heading",
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
            ".services__text",
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
            ".services__table",
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

          return () => {
            window.removeEventListener("resize", handler);
          };
        },
        element
      );
    }
  });
}
