var express = require('express');
var router = express.Router();
var { builder }  = require('../util/util')


/* GET users listing. */
router.post('/2step-code', function(req, res, next) {
  res.json(builder({ stepCode: '0.7' }));
});



module.exports = router;
