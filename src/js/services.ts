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
      mm.add("(max-width: 640px)", () => {
        const calcPadding = () => {
          const comp = window.getComputedStyle(table);

          return parseFloat(comp.getPropertyValue("padding-left"));
        };

        console.log("Width", tableWrapper.offsetWidth);

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
            // width: 320,
            left: calcLeft(),
            width: calcWidth(),
          },
          //   bounds: ".services__table",
        });

        console.log("Instance", instances[0]);

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
  });
}
