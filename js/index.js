import { homePageFn } from "./scripts/homePage.js";
import { studentFn } from "./scripts/studentForm.js";
import { teacherFn } from "./scripts/teacherForm.js";
import { courseFn } from "./scripts/courseForm.js";
import { teacherEditFormFn } from "./scripts/teachersEditForm.js";

document.addEventListener("DOMContentLoaded", () => teacherEditFormFn());

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
  .getElementsByClassName("teacherEdit")[0]
  .addEventListener("click", () => teacherEditFormFn());

document
  .getElementsByClassName("student")[0]
  .addEventListener("click", () => studentFn());
