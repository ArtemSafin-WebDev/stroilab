import "virtual:svg-icons-register";
import "../scss/style.scss";
import clients from "./clients";
import equipment from "./equipment";
import menu from "./menu";
import fancybox from "./fancybox";
import labServices from "./labServices";
import forms from "./forms";
import mission from "./mission";
import materials from "./materials";
import actions from "./actions";
import fieldLab from "./fieldLab";
import naturalTest from "./naturalTest";
import contactUs from "./contactUs";
import testLab from "./testLab";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  testLab();
  clients();
  equipment();
  fancybox();
  forms();
  labServices();
  mission();
  materials();
  fieldLab();
  actions();
  naturalTest();
  contactUs();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
