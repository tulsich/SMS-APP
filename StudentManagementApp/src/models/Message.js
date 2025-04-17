// src/models/Message.js

export default class Message {
  constructor(id, sender, title, body, date) {
    this.id = id;
    this.sender = sender;
    this.title = title;
    this.body = body;
    this.date = new Date(date);
  }

  getFormattedDate() {
    return this.date.toLocaleDateString();
  }
}
