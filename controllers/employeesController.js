const data = { employees: require("../model/employees.json") };

const getAllEmployees = (req, res) => {
  res.json(data.employees);
  console.log([req.body], "get");
};
const createNewEmployee = (req, res) => {
  res.json({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  console.log([req.body],"post");
};
const updateEmployee = (req, res) => {
  res.json({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  console.log(data.employees, "put");
};
const deleteEmployee = (req, res) => {
  res.json({
    id: req.body.id,
  });
  console.log(data.employees, "delete");
};
const getEmployeeById = (req, res) => {
  res.json({ id: req.params.id });
};
module.exports = {
  getAllEmployees,
  updateEmployee,
  createNewEmployee,
  deleteEmployee,
  getEmployeeById,
};
