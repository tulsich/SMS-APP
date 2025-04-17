// src/models/Student.js
class Student {
  constructor(id, name, email, className, rollNo) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.className = className;
    this.rollNo = rollNo;
  }

  getDetails() {
    return `Name: ${this.name}, Class: ${this.className}, Roll No: ${this.rollNo}`;
  }
}

export default Student;
