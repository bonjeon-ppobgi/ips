var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mind Forecast' });
});

router.use('/api/main', require('./main'));
router.use('/api/mind', require('./mind'));
router.use('/api/result', require('./result'));

module.exports = router;