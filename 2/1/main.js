var evt = require('events');
var emitter = new evt.EventEmitter();
emitter.on('create', function(){
    console.log('folder was created! ');
});
emitter.emit('create');