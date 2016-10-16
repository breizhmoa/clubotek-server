var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Club = require('../models/Club.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Club.find(function (err, clubs) {
    if (err) return next(err);
    res.json(clubs);
  });
});

module.exports = router;
