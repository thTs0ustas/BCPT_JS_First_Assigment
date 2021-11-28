//
// setting up localstorage
//
import {
  mockUpAssignment,
  mockUpCourse,
  mockUpStudent,
  mockUpTeacher,
} from "../staticData";

export let rootState = window.localStorage;

//
//filling state with initial values
//
rootState.setItem("studentState", JSON.stringify(mockUpStudent));
rootState.setItem("teachersState", JSON.stringify(mockUpTeacher));
rootState.setItem("courseState", JSON.stringify(mockUpCourse));
rootState.setItem("assignmentState", JSON.stringify(mockUpAssignment));
rootState.setItem("conditional", JSON.stringify(false));
