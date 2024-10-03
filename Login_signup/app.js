const express = require('express');
const mysql = require('mysql');
const authRoutes = require('./routers/authRoutes.js');
const config = require('./config.js');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));

const connection = mysql.createConnection(config.db);
connection.connect((err) => {
  if(err) throw err;
  console.log('Connected to db');
});

// Add this line to parse JSON payloads
app.use(express.json());

app.use('/auth', authRoutes);

// Add a simple root route
app.get('/', (req, res) => {
  res.redirect('/auth/login');
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(5000, () => console.log(`Server is running on 5000`));
