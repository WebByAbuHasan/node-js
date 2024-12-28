const http = require('http');
const server = http.createServer(function(req, res) {
   if(req.url==="/"){
       res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
       res.write(`<h1>hello this is my fast program</h1>`)
   }
    else if(req.url==="/about"){
       res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
       res.write(`<h1>hello this is my about program</h1>`)
    }
   else if(req.url==="/contact"){
       res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
       res.write(`<h1>hello this is my contact program</h1>`)
   }

});
server.listen(5050, () => {
    console.log("Server started on port 5050");
});
