import { homePageFn } from "./components/homePage";
import { courseFn } from "./components/courses/courseForm.js";
import { aboutUsFn } from "./components/aboutUs";
import { assignmentFn } from "./components/assignments";
import { teacherFn, teacherEditFormFn } from "./components/trainers";
import { studentFn, studentEditFormFn } from "./components/students";
import { rootState } from "./state/rootState.js";

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
