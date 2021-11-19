
import teachersHTML from "./HTML_PARTS/teachers.js";
let teachersState = {};


const extractFormValues = (state, formElements) =>
  (state[formElements.elements[0].value] = [...formElements.elements].reduce(
    (val, el) => ({ ...val, [el.id]: el.value }),
    {}
  ));

const subjects = {
    javascript:'Javascript',
    java:'Java',
    ['C#']:"C#",
    python:"Python"
}


export const subject = `   <option value="Subject" selected name="subject">-</option>
<option value="2" name="subject">${subjects.javascript}</option>
<option value="3" name="subject">${subjects.java}</option>
<option value="4" name="subject">${subjects["C#"]}</option>
<option value="5" name="subject">${subjects.python}</option>
`
export const teacherFn =() =>{
    document.getElementById('main').innerHTML = teachersHTML
    document.getElementById('navbar-toggler').ariaExpanded = false
    document.getElementById('navbar-toggler').classList.add('collapsed')
    document.getElementById('navbarNavDropdown').classList.remove('show')

    document.getElementById("subject").innerHTML = subject

    document.getElementById("teachersForm").addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValues(teachersState, teachersForm);
    console.log(teachersState)
    document.getElementById("teachersForm").addEventListener("submit", (e) => {
      e.preventDefault();
      extractFormValues(teachersState, teachersForm);
      console.log(teachersState)
    });
})}

