const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola desde inicio act");
});

const port = 4000;
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: ", port);
});
