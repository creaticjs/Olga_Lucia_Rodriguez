const http = require ('http');
const fs = require('fs');
const vec_datos = [];

module.exports = {
    muestra : function( txt){
        var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html";' +
        'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h1>' + txt + '</h1>'
    '</body>'+
    '</html>';
        
        
        http.createServer(function(request, response) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(body);
            response.end();
          }).listen(3000);
    },
    crea : function () {
        fs.readFile('./datos.txt','utf8',(err,datos) => {
            if(err) return;            
            vec_datos.push(datos);
            
            vec_datos.forEach(element => {
                this.muestra(element);
            });
        });
    }    
}