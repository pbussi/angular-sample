var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {

/*	var con = mysql.createConnection({
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
*/




var url = "http://www.lamarca.com.ar/lamarca/web/index.php/modelos/31";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
			console.log(response);
      res.render('users', { marcas: body });
    }
});
});
module.exports = router;
