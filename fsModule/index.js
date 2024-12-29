const http = require('http');
const fs = require('fs');
const url = require("node:url");

const server = http.createServer(function (request, response) {
    if(response.url="/"){

       // fs.readFile( `home.html`, 'utf8', function(err, data) {
       //     response.writeHead(200, {'Content-Type': 'text/html'});
       //     response.write(data);
       //     response.end();
       // })

        const data= fs.readFileSync( `home.html`)
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end(data)
    }
});

server.listen(4040, function () {
    console.log("Server started on port 4040");
});

