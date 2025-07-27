const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");
const { stringify } = require("querystring");

//handleNewUser
const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "userName and password is required!" });
  // check for duplicate user
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) return res.sendStatus(409);

  try {
    const hashedPWD = await bcrypt.hash(pwd, 10);
    const newUser = { username: user, password: hashedPWD };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ Success: ` New ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { handleNewUser };
