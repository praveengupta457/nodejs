var express=require('express')
var app=express()
var router=require('./route1.js')
var port=212


//the below is use to give dynamically url to the page*****************************
// app.get('/:id/:name',function(req,res){
   
//     res.send(`the id you send in the uri is: ${req.params.id} and the name you define is: ${req.params.name}`)
// })

//***************************************************/

// app.get('/',function(req,res){
//     res.send('now type the valid required url in the url tab')
// })

// ///defining complex regx router

// app.get('/:id([0-9]{5})',function(req,res){
//     res.send(`A valid url ${req.params.id}`)
// })
// app.get('*',function(req,res){
//     res.send('Sorry you type an invalid url..')
// })
app.use('/route1',router)
app.listen(port);
console.log(`port is listning on ${port}`)