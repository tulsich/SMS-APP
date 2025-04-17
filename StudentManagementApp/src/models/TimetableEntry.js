// src/models/TimetableEntry.js
class TimetableEntry {
  constructor(day, subject, startTime, endTime) {
    this.day = day;
    this.subject = subject;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  getTimeRange() {
    return `${this.startTime} - ${this.endTime}`;
  }
}

export default TimetableEntry;
