const fs = require('fs');

fs.readFile('./datos.txt','utf8',(err,datos) => {
    if(err) return;
    console.log(datos);
});