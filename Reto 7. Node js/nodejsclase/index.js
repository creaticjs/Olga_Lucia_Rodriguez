const http = require ('http');
const fx = require ('fs');

const server = http.createServer((req, resp) => {
    fx.readFile("./pagina.html", (err,data) =>{
        if(err){
            console.log(err);
            return;
        }
        resp.end(data);
    })
});

server.listen(3000);