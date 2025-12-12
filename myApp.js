require('dotenv').config();
let express = require('express');
var app = express();

app.use(function(req, res, next) {
  var logMessage = req.method + " " + req.path + " - " + req.ip;
  
  console.log(logMessage);
  
  next();
});


app.get("/", function(req, res) {
  const rutaAbsoluta = __dirname + "/views/index.html";
  res.sendFile(rutaAbsoluta);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ "message": message });
});

app.get(
  "/now",
  function(req, res, next) {
    req.time = new Date().toString(); 
    next(); 
  },
  function(req, res) {
    res.json({ time: req.time }); 
  }
);

app.get("/:word/echo", function(req, res) {
  const palabra = req.params.word;
  
  res.json({ echo: palabra });
});



























 module.exports = app;
