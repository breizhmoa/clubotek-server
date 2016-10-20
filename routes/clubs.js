var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Club = require('../models/Club.js');

/* GET /clubs listing. */
router.get('/', function(req, res, next) {
  Club.find(function (err, clubs) {
    if (err) return next(err);
    res.json(clubs);
  });
});

/* POST /clubs */
router.post('/', function(req, res, next) {
  Club.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /clubs/id */
router.get('/:id', function(req, res, next) {
  Club.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /clubs/:id */
router.put('/:id', function(req, res, next) {
  Club.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /clubs/:id */
router.delete('/:id', function(req, res, next) {
  Club.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
