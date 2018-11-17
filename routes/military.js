var express = require('express');
var router = express.Router();



/* GET military page. */
router.get('/', function(req, res, next) {
    res.render('military', { title: 'Military Experience' });
});

module.exports = router;