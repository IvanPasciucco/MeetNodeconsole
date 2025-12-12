require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser'); // <--- AGREGA ESTO
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
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


app.route("/name").get(function(req, res) {
  var nombre = req.query.first;
  var apellido = req.query.last;
  
  res.json({
    name: nombre + " " + apellido
  });
});

app.post("/name", function(req, res) {
  // body-parser ya desempaquetó los datos del formulario y los puso aquí:
  var nombre = req.body.first;
  var apellido = req.body.last;
  
  res.json({ name: nombre + " " + apellido });
});






















 module.exports = app;
