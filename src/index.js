import { homePageFn } from "./functions/homePage.js";
import { studentFn } from "./functions/studentForm.js";
import { teacherFn } from "./functions/teacherForm.js";
import { courseFn } from "./functions/courseForm.js";
import { teacherEditFormFn } from "./functions/teachersEditForm.js";
import { rootState } from "./state/rootState.js";

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
console.log(rootState);
