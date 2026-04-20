const express = require('express');
const cors = require('cors');
const todoRouter = require('./router/todoRouter.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("todoRouter:", todoRouter);
app.use('/api/v2/todos', todoRouter);

module.exports = app;