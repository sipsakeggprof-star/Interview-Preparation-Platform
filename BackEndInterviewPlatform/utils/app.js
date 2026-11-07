const express = require('express');

const app = express();

app.use(express.json());

app.use('/uploads', express.static('uploads'))

app.use('/api/auth',require('./Routes/authRoutes'))

app.use('/api/interview',require('./Routes/interviewRoutes'))

app.use('/api/interview',require('./Routes/userRoutes'))


module.exports = app;