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

app.use(express.static('public'));

server.listen(port, 'localhost');
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});

//Arduino
const board = new five.Board();
board.on("connect",function(){
var led1;
var led2;
board.on("ready", function() {
  var leds = [];
  for (i = 0; i < 20; i++) { 
      leds[i] = new five.Led(i);
  }
   //led1 = new five.Led(13);
   //led2 = new five.Led(12);
 });
});
//Socket
io.on('connection', function (socket) {

        socket.on('led:prender', function (pin) {
            leds[pin].on();
            setTimeout(()=>{console.log('prendiendo')},1000);
        });

        socket.on('led:apagar', function () {
            led1.off();
            setTimeout(()=>{console.log('apagando')},1000);
        });
        socket.on('led:titilar',function(){
          led2.blink(500);
          setTimeout(()=>{console.log('titilando')},1000);
        });

/*
        socket.on('ledVerde:titilar', function () {
           led2.on();
           setTimeout(()=>{console.log('esperando')},1000);
        });

        socket.on('ledVerde:off', function () {
            led2.off();
            setTimeout(()=>{console.log('esperando')},1000);
        });
        socket.on('blinkVerde:blink',function(){
          led1.blink(500);
          setTimeout(()=>{console.log('esperando')},1000);
        });
   */1111     
    });
