// src/models/ExamResult.js
class ExamResult {
  constructor(subject, score, total, grade) {
    this.subject = subject;
    this.score = score;
    this.total = total;
    this.grade = grade;
  }

  getPercentage() {
    return ((this.score / this.total) * 100).toFixed(2) + '%';
  }
}

export default ExamResult;
