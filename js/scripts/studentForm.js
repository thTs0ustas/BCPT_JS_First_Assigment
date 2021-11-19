import studentHTML from "../HTML_PARTS/student.js";
import { extractFormValues } from "../helperFn/helperFn.js";
let studentState = {};

export const studentFn = () => {
  document.getElementById("main").innerHTML = studentHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  // document.getElementById("subject").innerHTML = subject;
  let studentsForm = document.getElementById("studentsForm");
  studentsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValues(studentState, studentsForm);
    console.log(studentState);
  });
};
