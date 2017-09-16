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
var led1;
var led2;
board.on("ready", function() {
   led1 = new five.Led(13);
   led2 = new five.Led(12);
 });

//Socket
io.on('connection', function (socket) {

        socket.on('ledAmarillo:on', function () {
           led1.on();
        });

        socket.on('ledAmarillo:off', function () {
            led1.off();
        });
        socket.on('ledVerde:on', function () {
           led2.on();
        });

        socket.on('ledVerde:off', function () {
            led2.off();
        });
        socket.on('blinkVerde:blink',function(){
          led1.blink(500);
        });
        socket.on('blinkAmarillo:blink',function(){
          led2.blink(500);
        });
    });
