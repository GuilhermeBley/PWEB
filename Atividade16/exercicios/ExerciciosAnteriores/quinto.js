var eventos = require('events');
var emissorEventos = eventos.EventEmitter;
var ee = new emissorEventos();
ee.on('dados', function(fecha){
    console.log(fecha);
});
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);