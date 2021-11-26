import { homePageFn } from "./functions/homePage.js";
import { studentFn } from "./functions/studentForm.js";
import { teacherFn } from "./functions/teacherForm.js";
import { courseFn } from "./functions/courseForm.js";
import { teacherEditFormFn } from "./functions/teachersEditForm.js";
import { studentEditFormFn } from "./functions/studentEditForm.js";
import { rootState } from "./state/rootState.js";
import { aboutUsFn } from "./functions/aboutUs.js";
import { assignmentFn } from "./functions/assigment.js";

document.addEventListener("DOMContentLoaded", () => homePageFn());

document
  .getElementsByClassName("navbar-brand")[0]
  .addEventListener("click", () => homePageFn());

document
  .getElementsByClassName("assigment")[0]
  .addEventListener("click", () => assignmentFn());
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
document
  .getElementsByClassName("studentEdit")[0]
  .addEventListener("click", () => studentEditFormFn());
document
  .getElementsByClassName("aboutUs")[0]
  .addEventListener("click", () => aboutUsFn());
console.log(rootState);
