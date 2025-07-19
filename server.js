const express = require("express");
const app = express();
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const { logger } = require("./middleware/logEvents");
const cors = require("cors");

const PORT = process.env.PORT || 3500;

//
//
// serve static file
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/subdir", express.static(path.join(__dirname, "/public")));

const whiteList = [
  "http://localhost:3500",
  "https://ghrccp-3500.csb.app",
  "https://codesandbox.io/",
  undefined,
];
const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      console.log(` CORS: ${origin}`);
      callback(null, true);
    } else {
      console.warn(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionSucessStatus: 200,
};

app.use(cors(corsOption));
app.use(logger);
app.use("/", require("./routes/root"));
app.use("/subdir", require("./routes/subdir"));

app.all("/*splat", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});
app.use(errorHandler);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on Port ${PORT}`);
});
