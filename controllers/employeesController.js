const data = {
  employees: require("../model/employees.json"),
  setEmployeees: function (newEmployee) {
    this.employees = [...this.employees, newEmployee];
    return this.employees;
  },
};
let id = data.employees.at(-1)?.id;
const getAllEmployees = (req, res) => {
  res.json(data.employees);
  console.log("get");
};
const createNewEmployee = (req, res) => {
  if (!req.body.firstName || !req.body.lastName ) {
    console.log("Must provide a firstName and a lastName");
  } else if (!data.employees.includes(id)) {
   
    data.setEmployeees({
      id: id++,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
  }

  res.json(data.employees);
  console.log("post");
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
