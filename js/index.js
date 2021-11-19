import { homePageFn } from "./scripts/homePage.js";
import { studentFn } from "./scripts/studentForm.js";
import { teacherFn } from "./scripts/teacherForm.js";
import { courseFn } from "./scripts/courseForm.js";

document.addEventListener("DOMContentLoaded", () => courseFn());

document
  .getElementsByClassName("navbar-brand")[0]
  .addEventListener("click", () => homePageFn());

document
  .getElementsByClassName("course")[0]
  .addEventListener("click", () => courseFn());

document
  .getElementsByClassName("teacher")[0]
  .addEventListener("click", () => teacherFn());

document
  .getElementsByClassName("student")[0]
  .addEventListener("click", () => studentFn());
