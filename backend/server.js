const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const connectToDb = require('./models/index');
const cors = require('cors');
const app = express();

connectToDb();

app.get('/api/comments', require('./routes/commentRoutes'))

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api/comments', require('./routes/commentRoutes'))
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});


app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});