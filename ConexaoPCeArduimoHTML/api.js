var five = require('johnny-five');
var express = require('express');
var app = express();
var board = five.Board({port: 'COM3'});
var led = null;

board.on('ready', function(){
    led = new five.Led(13);
});

app.get('/ligar', function(req, res) {
    if (led != null){
        led.on()
    }
    res.send('Led ligado');
});

app.get('/desligar', function(req, res){
    res.send('Led desligado');
    if (led != null){
        led.off()
    }
    res.send('Led desligado');
});



app.listen(3000, function(){
    console.log('API rodando na porta 3000!')
});

