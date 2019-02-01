express = require("express");
mongoose = require("mongoose");
const app = express();
//
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((rep, res, next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
  .connect(
    "mongodb+srv://admin:123jesus@cluster0-c9kfd.mongodb.net/juegosludicos?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

app.get("/", (req, res)=> {
  res.send("Ludic Game");
});

//modulos externos
var juegos = require("./lib/Juegos");
var P_mentales = require("./lib/P_mentales");

//GET TODOS
app.get("/juegos", (req, res) => {
  juegos.getJuegos(req, res);
});
app.get("/P_mentales", (req, res) => {
  P_mentales.getP_mentales(req, res);
});

//GET POR ID
app.get("/juegos/:id", (req, res) => {
  juegos.getJuegos(req, res);
});
app.get("/P_mentales/:id", (req, res) => {
  P_mentales.getP_mentales(req, res);
});

//POST
app.post("/juegos", (req, res) => {
  juegos.newJuegos(req, res);
});
app.post("/P_mentales", (req, res) => {
  P_mentales.newP_mentales(req, res);
});

//PUT
app.put("/juegos/:id", (req, res) => {
  juegos.updateJuegos(req, res);
});

app.put("/P_mentales/:id", (req, res) => {
  P_mentales.updateP_mentales(req, res);
});

//DELETE
app.delete("/juegos/:id", (req, res) => {
  juegos.deleteJuegos(req, res);
});
app.delete("/P_mentales/:id", (req, res) => {
  P_mentales.deleteP_mentales(req, res);
});

app.listen(8081);
console.log(`Servidor on ${app.settings.env}`);
