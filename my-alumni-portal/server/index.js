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


// Everyone opearates on Internship Data
// Admin adds Coordinator
app.post("/addInternship", (req, res) => {
  const company_name = req.body.company_name;
  const position = req.body.position;
  const eligible_batches = req.body.eligible_batches;
  const eligible_branches = req.body.eligible_branches;
  const experience_required = req.body.experience_required;
  const date_posted = req.body.date_posted;
  const registration_link = req.body.registration_link;

  db.query("INSERT INTO `Internship` (`internship_id`, `company_name`, `position`, `eligible_batches`, `eligible_branches`, `experience_required`, `date_posted`, `registration_link`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)", 
  [company_name, position, eligible_batches, eligible_branches, experience_required, date_posted, registration_link],
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  })

});


// Admin reads Coordinator data
app.get("/getInternships", (req, res) => {
  db.query("SELECT * FROM Internship", (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});




// Everyone opearates on Job Data
// Alumni, Coordinator adds Job
app.post("/addJob", (req, res) => {
  const company_name = req.body.company_name;
  const position = req.body.position;
  const eligible_batches = req.body.eligible_batches;
  const eligible_branches = req.body.eligible_branches;
  const experience_required = req.body.experience_required;
  const date_posted = req.body.date_posted;
  const registration_link = req.body.registration_link;

  db.query("INSERT INTO `Job` (`job_id`, `company_name`, `position`, `eligible_batches`, `eligible_branches`, `experience_required`, `date_posted`, `registration_link`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)", 
  [company_name, position, eligible_batches, eligible_branches, experience_required, date_posted, registration_link],
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  })

});


// Everyone reads Job data
app.get("/getJobs", (req, res) => {
  db.query("SELECT * FROM Job", (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



// Everyone opearates on Event Data
// Coordinator adds Event
app.post("/addEvent", (req, res) => {
  const event_name = req.body.event_name;
  const description = req.body.description;
  const nature_of_event = req.body.nature_of_event;
  const organizer = req.body.organizer;
  const date_of_event = req.body.date_of_event;
  const starts_at = req.body.starts_at;
  const ends_at = req.body.ends_at;
  const venue = req.body.venue;
  const mode_of_event = req.body.mode_of_event;
  const registration_link = req.body.registration_link;

  db.query("INSERT INTO `Events` (`event_id`, `event_name`, `description`, `nature_of_event`, `organizer`, `date_of_event`, `starts_at`, `ends_at`, `venue`, `mode_of_event`, `registration_link`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)", 
  [event_name, description, nature_of_event, organizer, date_of_event, starts_at, ends_at, venue, mode_of_event, registration_link],
  (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  })


});


// Everyone reads Event data
app.get("/getEvents", (req, res) => {
  db.query("SELECT * FROM Events", (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
