//
// static data
//

let subjects = {
  javascript: "Javascript",
  java: "Java",
  ["C#"]: "C#",
  python: "Python",
};

const mockUpAssignment = {
  assignment1: {
    assignmentName: "assignment1",
    description: "description",
    submDate: "2021-11-16",
  },
  assignment2: {
    assignmentName: "assignment2",
    description: "description",
    submDate: "2021-11-16",
  },
};

const mockUpStudent = {
  Name1: {
    address: "Address 1",
    courses: "Java",
    dateOfBirth: "2021-11-11",
    email: "th@gmail.com",
    fee: "2.500,00 €",
    firstName: "Name1",
    lastName: "Name1",
    phone: "6969696969",
    assignments: [],
  },
  Name2: {
    address: "Address 2",
    courses: "JavaScript",
    dateOfBirth: "2021-11-11",
    email: "th@gmail.com",
    fee: "2.500,00 €",
    firstName: "Name2",
    lastName: "Name2",
    phone: "6969696969",
    assignments: [],
  },
};

const mockUpTeacher = {
  Teacher1: {
    email: "th@gmail.com",
    firstName: "Teacher1",
    lastName: "Teacher1",
    subject: "Javascript",
  },
  Teacher2: {
    email: "th@gmail.com",
    firstName: "Teacher2",
    lastName: "Teacher2",
    subject: "Javascript",
  },
};

const mockUpCourse = {
  Java: {
    cost: "2.000,00 €",
    courseName: "Java",
    endDate: "2021-12-05",
    startingDate: "2021-11-01",
    stream: "Java",
    type: "PartTime",
  },
  Javascript: {
    cost: "2.000,00 €",
    courseName: "Javascript",
    endDate: "2021-12-05",
    startingDate: "2021-11-01",
    stream: "Javascript",
    type: "PartTime",
  },
};

export {
  subjects,
  mockUpAssignment,
  mockUpStudent,
  mockUpTeacher,
  mockUpCourse,
};
