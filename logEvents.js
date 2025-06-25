const path = require("path");
const filePromises = require("fs").promises;
const { v4: uuid } = require("uuid");
const { format } = require("date-fns");
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log(uuid());
const logEvents = async (message) => {
  // const dateTime =
};
// const { error } = require("console");

// // console.log(path.dirname(__filename));
// // console.log(path.extname(__filename));
// console.log(path.basename(__filename));

// const fileOps = async () => {
//   try {
//     const data = await filePromises.readFile(
//       path.join(__dirname, "files", "starter.txt"),
//       "utf8"
//     );
//     console.log(data);
//     await filePromises.writeFile(
//       path.join(__dirname, "files", "reply.txt"),
//       data
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// fileOps();
