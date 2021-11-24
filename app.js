const express = require('express')
const app = express()
const port = 3000

const mysql = require("mysql");


app.get('/', (req, res) => {
  res.send('Hello World!')
})





const connection = mysql.createConnection({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});


connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


