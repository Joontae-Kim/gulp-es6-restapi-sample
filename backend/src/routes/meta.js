const express = require('express');
const router = express.Router();

// router.use((req, res, next) => {
//     console.log('Time: ', Date.now().toString());
//     next();
// });

router.get('/', (req, res) => {
    res.send({title:'meta', sub: 'sub meta 1'});
});

router.get('/:id', (req, res) => {
    res.send({msg:'You are reading meta ' + req.params.id});
});

router.get('/article/:id', (req, res) => {
    res.send({msg:'This article\'s id is ' + req.params.id});
});


module.exports = router;
