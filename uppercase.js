// const http = require('http')
// const port = 306
// var uc = require('upper-case')
// const data=("hello world")
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(uc.upperCase(data))
// }).listen(306)
// console.log("Port is listning",port)
// console.log(uc.upperCase(data))

// const http = require('http')
// const uc = require('upper-case')
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(uc.upperCase('hello sir how are you'))
// }).listen(333,console.log('server is listining'))

const readline = require('readline-sync')

function lower(inputString){
    return inputString.toLowerCase();
}

function upper(inputString){
    return inputString.toUpperCase();
}

const inputString=readline.question('enter string')
console.log('lowercase',lower(inputString) )
console.log('uppercase',upper(inputString) )