import { stateReducer } from "../helperFn/helperFn.js";
import { studentState } from "../scripts/studentForm.js";
import { teachersState } from "../scripts/teacherForm.js";

export let rootState = {};

rootState = stateReducer(rootState, {
  studentState,
  teachersState,
});

export let printState = () => console.log(rootState);
