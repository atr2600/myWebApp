var express = require('express');
var router = express.Router();

/* GET problemSolver page. */
router.get('/', function(req, res, next) {
    res.render('problemSolver', { title: 'problemSolver' });
});

module.exports = router;