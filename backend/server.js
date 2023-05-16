const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'donation'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.use(cors());
app.use(express.json());


app.get('http://localhost:8081/donation/', (req, res) => {
  const sql = 'SELECT * FROM people';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});


app.post('http://localhost:8081/', (req, res) => {
  const { name, age, email } = req.body;
  const sql = 'INSERT INTO people (name, age, email) VALUES (?, ?, ?)';
  db.query(sql, [name, age, email], (err, result) => {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

const port = 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
