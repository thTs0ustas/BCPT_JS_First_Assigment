//
// setting up localstorage
//
export let rootState = window.localStorage;

//
// mockup data for development purposes
//
const mockUpStudent = {
  Thanos: {
    courses: "Java",
    dateOfBirth: "2021-11-27",
    email: "th.ts0ustas@gmail.com",
    fee: "256,00 €",
    firstName: "Thanos",
    lastName: "tsou",
    address: "Νέστορος 9",
    phone: "6976726730",
    assignments: [],
  },
};
const mockUpTeacher = {
  Thanos: {
    email: "th.ts0ustas@gmail.com",
    firstName: "Thanos",
    lastName: "Tsoustas",
    subject: "Javascript",
  },
};
const mockUpCourse = {
  Java: {
    cost: "2.555,00 €",
    courseName: "Java",
    endDate: "2021-12-05",
    startingDate: "2021-11-01",
    stream: "Java",
    type: "PartTime",
  },
};

//
//filling state with initial values
//
rootState.setItem("studentState", JSON.stringify(mockUpStudent));
rootState.setItem("teachersState", JSON.stringify(mockUpTeacher));
rootState.setItem("courseState", JSON.stringify(mockUpCourse));
rootState.setItem("assignmentState", "{}");
rootState.setItem("conditional", JSON.stringify(false));
