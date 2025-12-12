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






























 module.exports = app;
