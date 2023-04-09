const express = require("express");
const router = express.Router();

const balance = 500000;

router.get("/", (req, res) => {
  res.json(balance);
  console.log(balance);
});

module.exports = router;
