var express = require('express');
var router = express.Router();

/* GET experience page. */
router.get('/', function(req, res, next) {
    res.render('experience', { title: 'Work History' });
});

module.exports = router;