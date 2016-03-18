var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Robots App!'
  });
});

router.get('/robots', function (req, res) {
  res.render('robots/index', {
    title: 'All Robots',
    robots: [
      {id:1, name:"r2d2"},
      {id:2, name:"c3po"},
      {id:3, name:"bb8"},
    ]
  });
});

router.get('/robots/new', function (req, res) {
  res.render('robots/new', {
    title: 'Add a New Robot'
  });
});

module.exports = router;