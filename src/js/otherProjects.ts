import Swiper from "swiper";
import "swiper/css";

export default function otherProjects() {
  const mql = window.matchMedia("(max-width: 640px)");
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".other-projects")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
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
  });
}
