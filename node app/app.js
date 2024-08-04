const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const con = mysql.createConnection({
  host: "localhost",
  database: "saveur",
  user: "root",
  password: "ziada",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.get("/items", (req, res) => {
  console.log("get request");
  const sql = "SELECT * FROM products";

  con.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching data: ", err);
      res.status(500).send("Failed to fetch items");
    } else {
      // Convert the image buffer to base64 string
      const items = result.map((item) => ({
        ...item,
        picture: item.picture ? item.picture.toString("base64") : null,
      }));

      console.log("Data fetched: ", items);
      res.send(items);
    }
  });
});

app.post("/addItems", (req, res) => {
  const { name, price, description, image } = req.body;

  // Decode the base64 image string
  const imageData = image.split(",")[1];
  const buffer = Buffer.from(imageData, "base64");

  const sql =
    "INSERT INTO products (name, price, description, picture) VALUES (?, ?, ?, ?)";
  const values = [name, price, description, buffer];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      res.status(500).send("Failed to add item");
    } else {
      console.log("Data inserted: ", result);
      res.send("Item added successfully");
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
