import {teacherFn} from "./teacherForm.js";
import {homePageFn} from "./homePage.js";

document.addEventListener("DOMContentLoaded",() => homePageFn())
document
  .getElementsByClassName("navbar-brand")[0]
  .addEventListener("click", () => homePageFn());

document
  .getElementsByClassName("teacher")[0]
  .addEventListener("click", () => teacherFn());
 

document
  .getElementsByClassName("student")[0]
  .addEventListener("click", () => window.open("students_form.html", "_self"));

