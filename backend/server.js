const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

const userRouter = require('./Users/userRoutes');
mongoose.connect('mongodb://localhost/notes');

app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));
