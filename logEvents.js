const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const path = require("path");
const fsPromises = require("fs").promises;
const fs = require("fs");

exports.logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};
//
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
