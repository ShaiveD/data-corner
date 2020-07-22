var express = require('express');
var app = express();
var router = express.Router()

router.get('/', function(req,res)
{
  res.send("First");
});

router.get('/second', function(req,res)
{
  res.send("Build another page now");
});

app.listen(3000);