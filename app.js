var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var five= require('johnny-five');
var io = require('socket.io')(server);
var port=3005;

//ruteo provisorio
app.get('/', function(req, res) {
  res.sendfile('public/index.html');
});

app.get('/ej1',function(req,res){
  res.sendfile('public/views/primerEjercicio.html');
});

app.get('/ej2',function(req,res){
  res.sendfile('public/views/segundoEjercicio.html');
});

app.get('/ej3',function(req,res){
  res.sendfile('public/views/tercerEjercicio.html');
});

app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
server.listen(port, 'localhost');

server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});

//Arduino
const board = new five.Board();
var leds = [];
board.on("connect",function(){
board.on("ready", function() {

  leds[1]= new five.Led(10);
  for (i = 2; i < 20; i++) {
      leds[i] = new five.Led(i);
  }

 });
});
//Socket
io.on("connection", function(socket) {
  socket.on("led:prender", function(pin) {
    leds[pin].on();
    setTimeout(() => {
      console.log("prendiendo");
    }, 1000);
  });

  socket.on("led:apagar", function(pin) {
    leds[pin].stop();
    leds[pin].off();
    setTimeout(() => {
      console.log("apagando");
    }, 1000);
  });
  socket.on("led:titilar", function(pin) {
    leds[pin].blink(500);
    setTimeout(() => {
      console.log("titilando");
    }, 1000);
  });
  socket.on("wait", function(d) {
  });
  socket.on("reset",function(){
    leds.forEach(function(element){
      element.stop();
      element.off();
    })
  })
});
