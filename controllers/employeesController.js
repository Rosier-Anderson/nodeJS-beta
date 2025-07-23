const data = {
  employees: require("../model/employees.json"),
  setEmployeees: function (newEmployee) {
    this.employees = [...this.employees, newEmployee];
    return this.employees;
  },
};
let id = data.employees.at(-1)?.id || 1;
const getAllEmployees = (req, res) => {
  res.json(data.employees);
  console.log("get");
};
const createNewEmployee = (req, res) => {
  if (!req.body.firstname || !req.body.lastname) {
    console.log("Must provide a firstname and a lastname");
  }

  data.setEmployeees({
    id: (id += 1),
    firstName: req.body.firstname,
    lastName: req.body.lastname,
  });

  res.json(data.employees);
};
const updateEmployee = (req, res) => {
  // update the employee
  let employeeId = req.body;
  let selectedEmployee = data.employees.at(employeeId).id;
  if (!employeeId) {
    console.log("Must provide the employee ID");
  }
  console.log(employeeId, "selected");
  res.json();
  console.log("put");
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
