const express = require('express');
const app = express()

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index', {'text' : 'Torgeir ', 'sometext': 'amund'});
});

app.get('/redirect', (req, res) => {
    res.redirect('/users/1');
});


const userRouter = require('./routes/users');

app.use('/users', userRouter);


app.listen(80);