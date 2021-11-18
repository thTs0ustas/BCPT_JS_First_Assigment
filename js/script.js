// State
const extractFormValues = (state, formElements) =>
  (state[formElements.elements[0].value] = [...formElements.elements].reduce(
    (val, el) => ({ ...val, [el.id]: el.value }),
    {}
  ));

const teachersState = {};
const studentsState = {};
const assignmentsState = {};

const state = {
  teachersState,
  studentsState,
  assignmentsState,
};
//Validation

//Event Listeners

const teachersForm = document.getElementById("teachersForm");
const studentsForm = document.getElementById("studentsForm");

teachersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  extractFormValues(teachersState, teachersForm);
});

studentsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  extractFormValues(studentsState, studentsForm);
});

//Loading new HTML page
document
  .getElementsByClassName("navbar-brand")[0]
  .addEventListener("click", () => window.open("home.html", "_self"));

document
  .getElementsByClassName("teacher")[0]
  .addEventListener("click", () => window.open("teachers_Form.html", "_self"));

document
  .getElementsByClassName("student")[0]
  .addEventListener("click", () => window.open("students_form.html", "_self"));

// document
//   .getElementsByClassName("teacher-info")[0]
//   .addEventListener("click", () =>
//     window.open("teachers_Form_edit.html", "_self")
//   );

// document
//   .getElementsByClassName("student-edit")[0]
//   .addEventListener("click", () => window.open("", "_self"));
//
// document
//   .getElementsByClassName("assignments")[0]
//   .addEventListener("click", () => window.open("", "_self"));
//
// document
//   .getElementsByClassName("assignments-edit")[0]
//   .addEventListener("click", () => window.open("", "_self"));
