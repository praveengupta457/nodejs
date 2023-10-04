const express= require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(3000)
console.log("port is listning")


// const express = require('express')
// const app = express()

// app.get('/', (req,res)=> { //get method
//   res.send('Hello World') //send response
// })
// app.listen(3000)