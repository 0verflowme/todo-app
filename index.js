const express = require("express");
const port = 8000;
const app = express();
const routes = require("./routes");

// Dependencies and setting some essential variables

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    console.error("Something went wrong while Running server on port ", port);
    return;
  }
  console.log("Server is up and running");
});
