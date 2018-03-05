const express = require('express');
const router = express.Router();

// router.use((req, res, next) => {
//     console.log('Time: ', Date.now().toString());
//     next();
// });

router.get('/', (req, res) => {
    res.send({title:'articles', sub: 'sub articles 1'});
});

router.get('/read/:id', (req, res) => {
    res.send({msg:'You are reading article ' + req.params.id});
});

router.get('/post/:id', (req, res) => {
    res.send({msg:'You are posting article ' + req.params.id});
});

module.exports = router;
