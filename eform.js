
const express=require('express')
const app= express()
var body=require('body-parser')

var bbd = body.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html',function(req,res){
    res.sendFile("/"+'index.html');
})

app.get('/process',bbd,function(res,req){
    response={
        name:req.query.name,
        surname:req.query.surname
    }
    console.log(response)
    res.end(JSON.stringify(express.response))
})
app.listen(3000)
console.log("port is listning")
