module.exports = class CompanyDTO {
  id;
  name;
  color;

  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
};
