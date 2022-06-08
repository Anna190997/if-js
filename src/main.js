class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  get course() {
    return 2022 - this.admissionYear;
  }
}
class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }

  getInfo() {
    this.studentsData.sort((a, b) => (a.admissionYear < b.admissionYear ? 1 : -1));
    return this.studentsData.map(
      (student) =>
        `${student.firstName} ${student.lastName} - ${student.courseName}, ${
          2022 - student.admissionYear
        } курс`,
    );
  }
}
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

const students = new Students(studentsData);
console.log(students.getInfo());
