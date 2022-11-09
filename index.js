const express = require("express");
const app = express();
const port = 80;

//motor 
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

// app.get('/', (req, res) => {
//   res.render("index", {Frase, id})
// })

const neas = [
  {id: "aaaaa" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "5453", Frase:""},
  {id: "bbb" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "453543", Frase:""},
  {id: "ccc" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "453543", Frase:""},
  {id: "hhh" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "345354", Frase:""},
  {id: "jjj" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "45345", Frase:""},
  {id: "rrr" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "547", Frase:""},
  {id: "" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "838", Frase:""},
  {id: "" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "", Frase:""},
  {id: "" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "", Frase:""},
  {id: "" , Nombre: "", Altura: " " , Habilidad: "", Imagen: "", Frase:""}
];

app.get("/info", (req, res) => {
  const number = Math.floor(Math.random() * 10);
  res.send(neas[number]);
});

app.get("/imagenes", (req, res) => {
  const nea = Math.floor(Math.random() * 10);
  res.send(Imagen[nea]);
});

app.get("/image", (req, res) => {
   const nea = Math.floor(Math.random() * 10);
   const id = neas[nea].id;
   const Nombre = neas[nea].Nombre;
   const Frase = neas[nea].Frase;
   const Imagen = neas[nea].Imagen;
  res.sendFile( __dirname + '/index.html');
  res.send(id);
  res.send(Nombre);
  res.send(Frase);
  res.send(Imagen);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
