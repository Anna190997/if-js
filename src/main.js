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
    for (let i = 0; i < this.studentsData.length; i++) {
      const { firstName, lastName, admissionYear, courseName } = this.studentsData[i];
      const information = ` ${firstName} ${lastName} - ${courseName}, ${2022 - admissionYear} курс`;
      console.log(information);
    }
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
students.getInfo();
