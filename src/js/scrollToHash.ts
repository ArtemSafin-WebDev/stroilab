import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

export default function scrollToHash() {
  // if (window.location.hash)
  //   gsap.to(window, { duration: 0.4, scrollTo: window.location.hash });

  if (window.location.hash == "") {
    return false;
  }

  const el = document.querySelector<HTMLElement>(window.location.hash);

  if (el !== null) {
    console.log("Scrolling");
    el.scrollIntoView({ behavior: "smooth" });
  }
}
