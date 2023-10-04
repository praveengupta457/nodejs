var http =require('http');
// var page= `<h1> hello node js </h1>
// <input type='text'/> <br> <br>
// <input type='text'/> <br> <br>
// <input type='text'/> `
http.createServer(function(req,res){
res.writeHead(200,{'content.Type':"text/html"})
res.write("node web page");
// res.write(page)
res.end();
}).listen(3306);
