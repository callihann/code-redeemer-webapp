var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('redeem', { title: 'Redeem Page' });
});

module.exports = router;
