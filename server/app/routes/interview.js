const db = require("../config/db");
const Interview = db.Interview;

const express = require("express");
const router = express.Router();

//replace later w/ entries retrieved from Companies table when db is up
var company1 = new Company("Amazon", "#eca43f");
var company2 = new Company("Google", "#ec483f");
const mockCompanies = [company1, company2];

router.get("/getAll", (req, res) => {
  res.status(200).json({ companies: mockCompanies });
});

//create company
router.post("/", (req, res) => {
  const companyInfo = req.body.company;
  var company = new Company(
    companyInfo.id,
    companyInfo.name,
    companyInfo.color
  );
  mockCompanies.push(company);
  res.json({ companies: mockCompanies });
});

//update one company's data using the company id
//expects full company resource
router.put("/update:id", (req, res) => {
  const id = req.params.id;
  const companyInfo = req.body.company;
});

router.delete("/delete:id", (req, res) => {
  const id = req.params.id;
  //DELETE FROM Companies WHERE company_id = id;
});
module.exports = router;
