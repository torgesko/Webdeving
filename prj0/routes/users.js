const { application } = require('express');
const express = require('express');

const router = express.Router();

router.use(logger);


// This is some sort of middleware
function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}



router.get('/', (req, res) => {
    res.send(`brukere`);
});

router.get('/:id', (req, res) => {
    res.send(`brukere ${req.user}`);
});


const users = [{'name': 'Kyle'}, {'name' : 'Sally'}]

router.param('id', (req, res, next, id) => {
    req.user = users[parseInt(id)].name;
    console.log(req.user);

    next()
})

module.exports = router;