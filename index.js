var express = require('express');

var app = express();

const PUERTO = 80;

app.listen(PUERTO, function(){
    console.log('Servidor http corriendo en el puerto 8000');
});

app.get('/', function(req, res){
    res.send('Hola, estas en la pagina principal de Backend');
    console.log('Se recibio una peticion de tipo get');
});