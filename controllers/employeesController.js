const data = {
  employees: require("../model/employees.json"),
  setEmployeees: function (data) {
    this.employees = data;
  },
};
let id = data.employees.at(-1)?.id || 1;
const getAllEmployees = (req, res) => {
  res.json(data.employees);
  console.log("get");
};
const createNewEmployee = (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    console.log("Must provide a firstname and a lastname");
  }
  let newEmployee = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  let s = data.employees;
  data.setEmployeees({
   ...s,
   ...newEmployee,
  });
  console.log(data.employees, "Post");
  res.json(data.employees);
};
const updateEmployee = (req, res) => {
  // update the employee
  let employeeId = req.body.id;
  let selectedEmployee = data.employees.find((id) => id.id === employeeId);
  let some = {
    id: req.body.id,
    firstname: req.body.firstName,
    lastname: req.body.lastName,
  };
  if (!employeeId) console.log("Must provide the employee ID to update");
  if (!selectedEmployee) console.log("This employee ID does not exists");
  let updatedEmployee = {
    ...selectedEmployee,
    ...some,
  };
  let newData = { ...data.employees, [employeeId]: { updatedEmployee } };
  console.log(newData, "selected");
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
