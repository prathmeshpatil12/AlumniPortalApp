const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'myDatabaseForProject'
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});

// LoginDetails used while logging in
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



// Admin operates on Student Data
// Admin reads Students  data
app.get("/getStudents", (req, res) => {
  db.query("SELECT * FROM Student", (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

// Admin adds Student
app.post("/addStudent", (req, res) => {
  const PRN = req.body.PRN;
  const name = req.body.name;

  db.query("INSERT INTO LoginDetails (PRN, password, name, type) VALUES (?, ?, ?, ?)", 
  [PRN, 'changeme', name, 'Student'], 
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      console.log("Values Inserted");
    }
  });

  db.query("INSERT INTO Student (PRN, name) VALUES (?, ?)", [PRN, name],
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  })

});

// Admin removes student
app.delete("/removeStudent/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM LoginDetails WHERE PRN=?", id, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      // res.send("Deleted");
    }
  })

  db.query("DELETE FROM Student WHERE PRN=?", id, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Deleted student");
    }
  });
});

// Admin transfers student
app.put("/transferStudent/:id", (req, res) => {
  const id = req.params.id;
  db.query("UPDATE LoginDetails SET type=? WHERE PRN=?", ['Alumni', id], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})



// Admin opearates on Alumni Data
// Admin adds Alumni
app.post("/addAlumni", (req, res) => {
  const PRN = req.body.PRN;
  const name = req.body.name;

  db.query("INSERT INTO LoginDetails (PRN, password, name, type) VALUES (?, ?, ?, ?)", 
  [PRN, 'changeme', name, 'Alumni'], 
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      console.log("Values Inserted");
    }
  });

  db.query("INSERT INTO Alumni (PRN, name) VALUES (?, ?)", [PRN, name],
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  })

});


// Admin reads Alumni data
app.get("/getAlumni", (req, res) => {
  db.query("SELECT * FROM Alumni", (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


// Admin removes alumni
app.delete("/removeAlumni/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM LoginDetails WHERE PRN=?", id, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      // res.send("Deleted");
    }
  })

  db.query("DELETE FROM Alumni WHERE PRN=?", id, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Deleted alumni");
    }
  });
});



// Admin opearates on Coordinator Data
// Admin adds Coordinator
app.post("/addCoordinator", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;

  db.query("INSERT INTO LoginDetails (PRN, password, name, type) VALUES (?, ?, ?, ?)", 
  [username, 'changeme', name, 'Coordinator'], 
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      console.log("Values Inserted");
    }
  });

  db.query("INSERT INTO Coordinator (username, name) VALUES (?, ?)", [username, name],
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  })

});


// Admin reads Coordinator data
app.get("/getCoordinator", (req, res) => {
  db.query("SELECT * FROM Coordinator", (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


// Admin removes coordinator
app.delete("/removeCoordinator/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM LoginDetails WHERE PRN=?", id, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      // res.send("Deleted");
    }
  })

  db.query("DELETE FROM Coordinator WHERE username=?", id, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Deleted coordinator");
    }
  });
});