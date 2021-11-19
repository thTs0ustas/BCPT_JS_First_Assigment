import teachersHTML from "../HTML_PARTS/teachers.js";
import { extractFormValues } from "../helperFn/helperFn.js";

let teachersState = {};

const subjects = {
  javascript: "Javascript",
  java: "Java",
  ["C#"]: "C#",
  python: "Python",
};

export const subject = `<option value="Subject" selected name="subject">-</option>
<option value="2" name="subject">${subjects.javascript}</option>
<option value="3" name="subject">${subjects.java}</option>
<option value="4" name="subject">${subjects["C#"]}</option>
<option value="5" name="subject">${subjects.python}</option>
`;
export const teacherFn = () => {
  document.getElementById("main").innerHTML = teachersHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  document.getElementById("subject").innerHTML = subject;
  const teachersForm = document.getElementById("teachersForm");
  teachersForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValues(teachersState, teachersForm);
    console.log(teachersState);
  });
};
