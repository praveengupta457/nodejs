// const http = require('http')
// const port= 3

// const server = http.createServer(function(req,res){

// })

// server.listen(port , function(error){
//     if (error){
//   console.log('something went wrong',error)
//     }
//   else{
//     console.log("server is listning",+port)
//   }
//     })



// const http = require('http')
// const fs = require('fs')
// const port =306
// const server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     fs.readFile('index.html', function(error,data){
//         if (error){
//             res.writeHead(404)
//             res.write('error:file not found')
//         }
//         else{
//             res.write(data)
//         }
//         res.end()
//     })
//     // res.write('hello node')
//     // res.end()
// })

// server.listen(port ,function(error){
//     if (error){
//         console.log("something happend wrong",error)

//     }
//     else{
//         console.log("port is listning",port)
//     }
// })


const http = require('http')
const fs= require('fs')
const uc = require ('upper-case')
const port = 3067

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404)
            console.log("file not found")
        }
        else{
            res.write(uc.upperCase(data))
        }
    })
})
.listen(3067)
.listen(port,function(error){
    if(error){
        console.log("something wrong")
    }else{
        console.log('port is listning',port)
    }
})
