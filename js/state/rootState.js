export let rootState = window.sessionStorage;

rootState.setItem("studentState", "{}");
rootState.setItem("teachersState", "{}");
rootState.setItem("courseState", "{}");
rootState.setItem("assignments", "{}");

export let printState = () => console.log(rootState.currentState);
