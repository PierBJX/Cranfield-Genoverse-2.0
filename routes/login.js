var express = require('express');
var router = express.Router();

/* GET genome page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;
