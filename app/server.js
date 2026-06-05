const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
  res.send(`Application Running in ${APP_ENV}`);
});

app.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});