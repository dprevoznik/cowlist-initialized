const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const Promise = require("bluebird");
const con = require("./db/config.js");
const app = express();
const port = 3000;

/*
 ******************
 *** MIDDLEWARE ***
 ******************
 */

app.use(express.static("./client/dist"));
app.use(bodyParser.json());

/*
 ******************
 *** ROUTES ***
 ******************
 */
//app.get("/", (req, res) => res.redirect('/api/cows'));

app.get("/api/cows", (req, res) => {
  con
    .queryAsync("SELECT * FROM cows")
    .then(cowsObj => {
      res.send(cowsObj);
    })
    .catch(err => {
      console.log("error on get request:", err);
    });
});

app.post("/api/cows", (req, res) => {
  // access body of request (should contain {name, description})
  let { name, description } = req.body;

  con
    .queryAsync(`SELECT name FROM cows where name = ?`, name)
    .then(result => {
        if (result.length > 0) {
          console.log('already exists'); 
          throw Error('already exists');
        } else {
          return con.queryAsync(`INSERT INTO cows (name, description) VALUES (?, ?)`, [name, description]);
        }
    })
    .then(result => res.sendStatus(201))
    .catch(err => res.sendStatus(400));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
