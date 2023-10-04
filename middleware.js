const express=require('express')
var app=express()
const route=express.Router(); // use for many specific pages
const middleware=(req,res,next)=>{

if(!req.query.age){
    res.send('to access the user page you need to be above 18 years old')
}
else if(req.query.age<18){
    res.send('you cant access this page')
}
else{
next();
}
}
// app.use(middleware);

route.use(middleware);

app.get('/',(req,res)=>{
    res.send('welcome to the home page..!')
})

app.get('/about',(req,res)=>{
    res.send('welcome to the about page..!')
})


//if we will not assign the middleware function to the specific route then it will work as the application level middleware means, will apply to all route
// to assign it to a perticular route we need to pass the middleware function to the perticular route where we want to use it thats it.
//to use it below dont use middleware globally ie( app.use(middleware);) use it in the specific rote as used below 


app.get('/user',(req,res)=>{  //i have removed the (middleware) from here to use route
    res.send('welcome to the user page..!')
})

//suppose we have to use our middleware on 25 routes then we cant put middleware in every function to use it shows bad code habbit so we use a express function express.Router()
// on the line 3 so now use route variable direst where  you want to use middleware. lets take a route contact.

route.get('/contact',(req,res)=>{
    res.send('Thanks to contact us')
})
app.use('/',route);

app.listen(300)
console.log("port is listning")

