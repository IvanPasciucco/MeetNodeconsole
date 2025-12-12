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
  res.json({
    "message": "Hello json"
  });
});




























 module.exports = app;
