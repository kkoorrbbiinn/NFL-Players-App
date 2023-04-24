const dotenv = require('dotenv').config();
const express = require('express');
// const path = require('path')
const connectToDb = require('./models/index');
// const commentsCtrl = require('./controllers/comments')
const app = express();

connectToDb();

app.get('/api/comments', require('./routes/commentRoutes'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api/comments', require('./routes/commentRoutes'))

app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});