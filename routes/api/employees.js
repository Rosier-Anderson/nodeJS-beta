const express = require("express");
const router = express.Router();
const path = require("path");
const data = {};
data.employees = require("../../model/employees.json");

router.get("/", (req, res) => {
  res.json(data.employees);
});
