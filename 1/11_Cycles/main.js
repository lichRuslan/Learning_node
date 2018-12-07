console.log('Main module starting !');
var a = require('./testA');
var b = require('./testB');
console.log(`in main, testA.done = ${a.done} , testB.done = ${b.done}`);