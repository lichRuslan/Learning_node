var fileReader = require('./readFile.js');
var reader = new fileReader.Reader();
reader.readDataFromFile('file.js', function(responce){
    console.log(responce);
})