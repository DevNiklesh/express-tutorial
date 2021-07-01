const express = require('express');
const userRouter = require('./routes/user-routes');

const app = express();

// GET, POST, PUT, DELETE - (CRUD) CREATE READ UPDATE DELETE

app.get('/', (req, res) => {
    res.send('This is express handler');
});

app.use('/user', userRouter);

// -  /name?id=abcd
// -  /name/abcd

app.get('/name/:id', (req, res) => {
    // const id = req.query.id;

    const id = req.params.id;

    res.send('This is Kailey with id : ' + id);
});

app.get('/teams/members', (req, res) => {
    res.send('This is team');
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});