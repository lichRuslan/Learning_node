console.log('File A is loading ...');
exports.done = false;
var b = require('./testB');
console.log(`In testA, testB.done = ${b.done} `);
exports.done = true;
console.log('File A is done');
