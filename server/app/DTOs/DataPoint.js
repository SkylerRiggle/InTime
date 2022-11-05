module.exports = class DataPoint {
  userId;
  daysAfterApplication;
  date;
  eventId;

  constructor(userId, eventId, daysAfterApplication, date) {
    this.userId = userId;
    this.eventId = eventId;
    this.daysAfterApplication = daysAfterApplication;
    this.date = date;
  }
};
