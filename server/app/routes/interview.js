//retreiving average (days_after_application) for each type of event for this company
//will require additional module to keep rolling sum & rolling divisor (for updating avg)

const express = require("express");
const router = express.Router();

// SELECT AVG(days_after_application) FROM DataPoint WHERE event_name = "Round 1 Interview" AND company_name = "Amazon"
module.exports = router;
