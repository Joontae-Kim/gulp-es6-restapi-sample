const express = require('express');
const router = express.Router();

// router.use((req, res, next) => {
//     console.log('Time: ', Date.now().toString());
//     next();
// });

router.get('/', (req, res) => {
    res.send({title:'articles', sub: 'sub articles 1'});
});

router.get('/:id', (req, res) => {
    res.send({msg:'req.params.id is ' + req.params.id});
});

router.get('/post/:id', (req, res) => {
    res.send({msg:'Your post id is ' + req.params.id});
});

module.exports = router;
