import { stateReducer } from "../helperFn/helperFn.js";
import { studentState } from "../scripts/studentForm.js";
import { teachersState } from "../scripts/teacherForm.js";
import { courseState } from "../scripts/courseForm.js";

export let rootState = {};
// let mockUp = {
//   Τσουστας: {
//     email: "th.ts0ustas@gmail.com",
//     "first-name": "Τσουστας",
//     "last-name": "Αθανασιος",
//     subject: "Javascript",
//   },
// };
rootState = stateReducer(rootState, {
  studentState,
  teachersState,
  courseState,
});

export let printState = () => console.log(rootState.currentState);
