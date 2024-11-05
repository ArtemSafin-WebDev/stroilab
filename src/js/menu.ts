export default function menu() {
  const menu = document.querySelector<HTMLElement>(".menu");
  if (!menu) return;
  const button = menu.querySelector<HTMLButtonElement>(".menu__button");

  button?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-shown");
  });

  const dropdownClose = document.querySelector<HTMLElement>(
    ".menu__dropdown-close"
  );

  dropdownClose?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("menu-shown");
  });

  const links = Array.from(menu.querySelectorAll<HTMLLinkElement>("a"));
  links.forEach((link) =>
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-shown");
    })
  );
}
