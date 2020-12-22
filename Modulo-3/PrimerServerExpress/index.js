const express= require('express')
const path = require('path')
//Permite descifrar los datos del body en una peticion
const bodyParser= require('body-parser')

const port=3000
const app = express()

// Cada uno de los require debemos decirle a la aplicacion que lo use
app.use(bodyParser.urlencoded({ extended:true}))

base
app.get('/',(req,res)=>{
  res.send('Hola mundo con express')
})

// Servir un archivo
app.get('/index',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'))
})

// Parametros en el body
app.post('/form',(req,res)=>{
  console.log(req.body.nombre)
  res.json({nombre:req.body.nombre})
  res.end()
})

// Parametros en la ruta
app.get('/cursos/:nombre',(req,res)=>{
  console.log(req.params.nombre)
})

// tambien existen los parametros query ?s=n

app.listen(port,()=>{
  console.log('Servidor listo y escuchando en el puerto: '+port)
})