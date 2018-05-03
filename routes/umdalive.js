var express = require('express');
var router = express.Router();

/* GET umdalive page. */
router.get('/', function(req, res, next) {
    res.render('umdalive', { title: 'umdalive' });
});

module.exports = router;