require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;
app.use(express.static('public'))
app.use(express.json());


//array que funciona como una tabla de BD
let usuarios = [];
let i = 0;



app.post('/registrar', (req, res)=> {
  usuarios[i] = req.body;
  console.log(usuarios[i]);
  i = i + 1;
  res.send(req.body);
})


app.get('/consultar', (req, res)=> {

  console.log(usuarios);
  res.send(usuarios)
})


app.delete('/eliminar', (req, res) => {
  
  console.log(req.body);
  console.log('Se ha eliminado a: ', usuarios[req.body.id]);
  usuarios.splice(req.body.id, 1)
  console.log('Usuarios restantes: ',  usuarios);

  res.send(req.body);
})




app.get('/', function (req, res) {
  res.send('Hola mundo')
})

app.get('/users', (req,res)=>{
    res.send([{user: "Martin"}]);
})

app.get('/about', (req, res)=> {
  res.send('Este es el about');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})


//Dime por qué
//Te clavaste como un vicio, y como un vicio hoy lo tengo que sanar...