var express = require('express');
var router = express.Router();
var cors = require('cors');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'App Project Online Authenticator' });
});


router.get('/authenticate/:appName', cors(), function(req, res, next) {
  console.log("app to authenticate: "+ req.params.appName);
  if(req.params.appName === "PrinterApp") {
    res.json({'result':true});
  }
});

module.exports = router;
