var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
	var con = mysql.createConnection({
  			host: "localhost",
  			user: "root",
  			password: "",
  			database: "lamarca"
		});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM marcas", function (err, result, fields) {
    if (err) throw err;
    res.render('users', { marcas: result });
  });
});

 // res.send('respond with a resource');
});

module.exports = router;
