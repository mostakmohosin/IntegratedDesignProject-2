const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());
const cors =require('cors')

server.use(cors({
  origin: "http://localhost:3000"
}))


//Establish the database connection

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "donation",

});

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      console.log("successfully Connected to DB");
    }
  });

//Establish the Port

  server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....Port!!!!");
    }

    else 
    {
        console.log("Started....!!!! 8085");

    }
});

//Create the Records

server.post("/api/users/add", (req, res) => {
    let details = {
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      password: req.body.password,
      c_password: req.body.c_password,
    };
    let sql = "INSERT INTO users SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "users created Failed" });
      } else {
        res.send({ status: true, message: "users created successfully" });
      }
    });
  });



//view the Records

server.get("/api/users", (req, res) => {
    var sql = "SELECT * FROM users";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


//Search the Records

server.get("/api/users/:id", (req, res) => {
    var usersid = req.params.id;
    var sql = "SELECT * FROM users WHERE id=" + usersid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });



//Update the Records

server.put("/api/users/update/:id", (req, res) => {
    let sql =
      "UPDATE users SET fullname='" +
      req.body.fullname +
      "', username='" +
      req.body.username +
      "',email='" +
      req.body.email +
      "', phone='" +
      req.body.phone +
      "', gender='" +
      req.body.gender +
      "', password='" +
      req.body.password +
      "', c_password='" +
      req.body.c_password +
      "'  WHERE id=" +
      req.params.id;
  
    let a = db.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "users Updated Failed" });
      } else {
        res.send({ status: true, message: "users Updated successfully" });
      }
    });
  });



  //Delete the Records

  server.delete("/api/users/delete/:id", (req, res) => {
    let sql = "DELETE FROM users WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "users Deleted Failed" });
      } else {
        res.send({ status: true, message: "users Deleted successfully" });
      }
    });
  });

  //DONOR Side

  server.post("/api/donor/add", (req, res) => {
    let details = {
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      password: req.body.password,
      c_password: req.body.c_password,
    };
    let sql = "INSERT INTO users SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "users created Failed" });
      } else {
        res.send({ status: true, message: "users created successfully" });
      }
    });
  });


//view the Records

server.get("/api/donor", (req, res) => {
    var sql = "SELECT * FROM donor";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


//Search the Records

server.get("/api/donor/:id", (req, res) => {
    var donorid = req.params.id;
    var sql = "SELECT * FROM donor WHERE id=" + donorid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


  //Delete the Records

  server.delete("/api/donor/delete/:id", (req, res) => {
    let sql = "DELETE FROM donor WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "donor Deleted Failed" });
      } else {
        res.send({ status: true, message: "donor Deleted successfully" });
      }
    });
  });