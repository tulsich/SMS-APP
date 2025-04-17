// src/models/Holiday.js
class Holiday {
  constructor(date, title, description) {
    this.date = date;
    this.title = title;
    this.description = description;
  }

  getFormattedDate() {
    return new Date(this.date).toDateString();
  }
}

export default Holiday;
