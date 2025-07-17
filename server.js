const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3500;
//
//
// serve static file
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("subdir", express.static(path.join(__dirname, "/public")));
//

app.use("/", require("./routes/root"));

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
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on Port ${PORT}`);
});
