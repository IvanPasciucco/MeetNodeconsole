require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");


// app.get("/", function(req, res) {
//     res.send("Hello Express");
//   });

app.get("/", function(req, res) {
  // __dirname nos da la ruta absoluta de la carpeta en el disco duro
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




























 module.exports = app;
