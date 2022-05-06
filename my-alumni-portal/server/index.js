const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'myDatabaseForProject'
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});

app.get("/loginDetails/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM LoginDetails WHERE PRN = ?", id, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});