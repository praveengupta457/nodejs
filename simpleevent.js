const eventEmitter = require('events')
const event = new eventEmitter();

function India(){
    console.log("jai hind.!");
}
event.on('India',(new_name,Capital)=>{ //we call emmit here
console.log(`jai shree RAM..! this is new ${new_name} and whose capital is ${Capital}`)
})

event.emit('India',India(),"bharat","delhi")  // we can pass multiple arguments in the emmit  lie a function or any parameter


setTimeout(()=>{
console.log('hello after 2 second'),2000},2000)

setTimeout(()=>{
console.log('hello after 1 second ')
},1000)
