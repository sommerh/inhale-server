const router = require('express').Router();

// api
router.use('/strategies', require('./strategies'));

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
