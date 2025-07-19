const whiteList = [
  "http://localhost:3500",
  "https://ghrccp-3500.csb.app",
  "https://codesandbox.io/",
  undefined,
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      console.log(` CORS: ${origin}`);
      callback(null, true);
    } else {
      console.warn(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSucessStatus: 200,
};

module.exports = corsOptions;
