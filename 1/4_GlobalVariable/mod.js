var x = 55;
function test() {
    console.log(`Test function = ${x}`);
}

global.number = x;
global.func = test;