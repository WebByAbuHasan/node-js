const http = require('http');
const URL = require('url');

const server = http.createServer(function (req, res) {
    const Myurl = "https://abuhasans.com/portfolio.html/year2024";
    const myurlObj = URL.parse(Myurl); // Pass the URL string directly to URL.parse
    const host = myurlObj.hostname;   // Get the hostname
    const port = myurlObj.port || "No Port Specified"; // Get the port or a default message

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(`<h1>Host: ${host}</h1>`);
    res.end(`<h1>Port: ${port}</h1>`);
});

server.listen(5060, () => {
    console.log("Server started on port 5060");
});

