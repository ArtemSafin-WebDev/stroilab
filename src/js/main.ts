import "virtual:svg-icons-register";
import "../scss/style.scss";
import clients from "./clients";
import equipment from "./equipment";
import menu from "./menu";
import fancybox from "./fancybox";
import labServices from "./labServices";
import forms from "./forms";
import mission from "./mission";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  clients();
  equipment();
  fancybox();
  labServices();
  forms();
  mission();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
