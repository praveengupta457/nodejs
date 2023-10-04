// emitter (can only be created by api)
// event

const express = require('express');
const EventEmmiter= require("events");
const app = express() 

// to count events 
 const event= new EventEmmiter();

let  count = 0
event.on("countAPI",()=>{
    count++;
    console.log("event called ", count)

})

app.get("/",(req,res)=>{
    res.send('api called')
    event.emit("countAPI")   

});

app.get("/search",(req,res)=>{
    res.send('search called')
    event.emit("countAPI")  

});

app.get("/helo",(req,res)=>{
    res.send('hello api')
    event.emit("countAPI")  

});
app.get("/new",(req,res)=>{
    res.send("this is new Theme")
    event.emit('countAPI')
});

app.listen(306, function(error){
    if(error){
        console.log("something went wrong",error)
    }
    else{
        console.log("port is listning")
    }
});
