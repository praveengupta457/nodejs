const http = require('http');
const port=330;
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hello node js server");
    res.end();
}).listen(330);
console.log("port is listining",port);


