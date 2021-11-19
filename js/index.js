import { homePageFn } from "./scripts/homePage.js";
import { studentFn } from "./scripts/studentForm.js";
import { teacherFn } from "./scripts/teacherForm.js";

document.addEventListener("DOMContentLoaded", () => homePageFn());

document
  .getElementsByClassName("navbar-brand")[0]
  .addEventListener("click", () => homePageFn());

document
  .getElementsByClassName("teacher")[0]
  .addEventListener("click", () => teacherFn());

document
  .getElementsByClassName("student")[0]
  .addEventListener("click", () => studentFn());
