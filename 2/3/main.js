'use strict'
var count  = 0;
var print = () => {
    count++;
    console.log(`Click ${count} \n`);
}
var evt = require('events');
var emt = new evt.EventEmitter;
emt.on('click', print);
emt.addListener('click', print);
emt.once('click', print);
emt.emit('click');
emt.emit('click');
