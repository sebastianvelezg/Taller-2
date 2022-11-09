const express = require("express");
const os = require("os") 
const app = express();
const port = 80;
 
app.set('view engine', 'ejs');


const neas = [
  {id: "1" , Nombre: "Feid", Altura: "1.68m" , Habilidad: "No tener pelo", Imagen: "https://storage.googleapis.com/pokeneastaller2/faid.webp", Frase:"Hey mor"},
  {id: "2" , Nombre: "Reykon", Altura: "1,75m" , Habilidad: "Prenderlo", Imagen: "https://storage.googleapis.com/pokeneastaller2/reykon.jpg", Frase:"Reykon el lider hey hey que no se te olvide"},
  {id: "3" , Nombre: "Ryan CAstro", Altura: "1,70m" , Habilidad: "ser un mujeriego", Imagen: "https://storage.googleapis.com/pokeneastaller2/ryan%20castro.jpg", Frase:"Que chimba sog"},
  {id: "4" , Nombre: "Teo LB", Altura: "1,65," , Habilidad: "Picarla", Imagen: "https://storage.googleapis.com/pokeneastaller2/teoLB.jpg", Frase:"Nea que estilo"},
  {id: "5" , Nombre: "Lokillo", Altura: "1,75m" , Habilidad: "Rastacuando", Imagen: "https://storage.googleapis.com/pokeneastaller2/lokillo.jpg", Frase:"Bendito amor padre"},
  {id: "6" , Nombre: "Lady Tabares", Altura: "1,45m" , Habilidad: "Vender en semaforos", Imagen: "https://storage.googleapis.com/pokeneastaller2/ladytabares.jpg", Frase:"Fuck you men gonorrea"},
  {id: "7" , Nombre: "Cojo Crazy", Altura: "1,78m" , Habilidad: "Cojear", Imagen: "https://storage.googleapis.com/pokeneastaller2/cojo%20crazy.jpg", Frase:"Prenda el moño"},
  {id: "8" , Nombre: "Alcolirykoz", Altura: "1,78m" , Habilidad: "Rapear", Imagen: "https://storage.googleapis.com/pokeneastaller2/alcolirykoz.jpeg", Frase:"Las neas son santa claus"},
  {id: "9" , Nombre: "Giovanni Quiroz", Altura: "1,80m" , Habilidad: "Detectar ganzos ciegos", Imagen: "https://storage.googleapis.com/pokeneastaller2/giovani%20quiroz.jpeg", Frase:"Yo si soy mucha loka"},
  {id: "10" , Nombre: "Kevin Roldan", Altura: "1,73m" , Habilidad: "Ser una fresa", Imagen: "https://storage.googleapis.com/pokeneastaller2/kr.jpg", Frase:"Kevin por ahi no"}
];

app.get("/info", (req, res) => {
  const number = Math.floor(Math.random() * 10);
  res.send(neas[number]+" - Container Id: "+os.hostname());
});


app.get("/image", (req, res) => {
   const random = Math.floor(Math.random() * 10);
   const {id, Nombre, Frase, Imagen} = neas[random];
   const infoNea = {id, Nombre, Frase, Imagen};
   console.log(infoNea)
  res.render('index', {infoNea});
});
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
