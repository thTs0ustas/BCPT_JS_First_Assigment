import { mapTableRows, stateReducer } from "../helperFn/helperFn.js";
import { studentState } from "../scripts/studentForm.js";
import { teachersState } from "../scripts/teacherForm.js";
import { courseState } from "../scripts/courseForm.js";

export let rootState = window.sessionStorage;
rootState.setItem("studentState", "{}");
rootState.setItem("teachersState", "{}");
rootState.setItem("courseState", "{}");
// let mockUp = {
//   Τσουστας: {
//     email: "th.ts0ustas@gmail.com",
//     "first-name": "Τσουστας",
//     "last-name": "Αθανασιος",
//     subject: "Javascript",
//   },
// };

export let printState = () => console.log(rootState.currentState);
