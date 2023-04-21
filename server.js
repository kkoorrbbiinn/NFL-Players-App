require('dotenv').config()
const express = require('express');
// const path = require('path')
const connectToDb = require('./Backend/models/index');
// const commentsCtrl = require('./controllers/comments')
const app = express();

connectToDb();

app.get('/', (req, res) => {
    res.json({hello: 'world'});
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// app.use('/api/comments', commentsCtrl)

app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});