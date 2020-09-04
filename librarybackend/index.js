const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const mysqlconnection = require('./database/db');
var app = express();
var port = 3000;

app.use(express.json());
app.use(cors());

const bookRoutes = require('./routes/book_list');
app.use("/book", bookRoutes);

app.listen(port, () => console.log('server running on port '+port));
