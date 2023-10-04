const http = require('http')
const url= require('url')

const port=3000
http.createServer(function(req,res){
    const parseint=url.parse(req.url);
    const query =parseint.query;

    const firstname=query.firstname;
    const lastname=query.lastname;
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`hello , ${firstname} ${lastname}`);
    res.end();  
}).listen(port,console.log('port is listning'))
