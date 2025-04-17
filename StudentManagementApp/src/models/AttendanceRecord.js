// src/models/AttendanceRecord.js
class AttendanceRecord {
  constructor(date, status) {
    this.date = date; // format: YYYY-MM-DD
    this.status = status; // 'present' or 'absent'
  }

  getFormattedDate() {
    return new Date(this.date).toDateString();
  }

  isPresent() {
    return this.status === 'present';
  }
}

export default AttendanceRecord;
