const fs = require('fs');

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

exports.getData = function(file){
    var filepath = __dirname + '/data/' + file;
    return readJsonFileSync(filepath);
}
