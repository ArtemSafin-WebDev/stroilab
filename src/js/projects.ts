import Select from "./classes/Select";

export default function projects() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".projects")
  );

  elements.forEach((element) => {
    const categories = element.querySelector<HTMLElement>(
      ".projects__categories"
    );

    if (categories) {
      new Select(categories);
    }
  });
}
