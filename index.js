const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: "hopper.proxy.rlwy.net",
  user: "root",
  password: "vWOdrTKLpFYoneXAOzdiTdkxduGhongG",
  database: "railway",
  port: 40683
});

app.get("/", (req, res) => {
  connection.query("SELECT NOW() AS time", (err, results) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      res.json(results[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
