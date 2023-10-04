// const ventEmitter = require('events')
// // const { EventEmitter } = require('stream')

// const eventemmiter = new ventEmitter();

// function multipy(a,b){

//     const result=a*b
//     console.log("multiply of the numbers are ",result)
// }

// eventemmiter.on('multiply',multipy)

// eventemmiter.emit('multiply',4,6)

const EventEmitter = require('events')

const event = new EventEmitter();

function abc(a,b){
    const result = a*b
console.log("multiplication is: "+result)
}
const abc1 = (a,b)=>{
    const result=a+b
    console.log("sum of the two numbers : ",result)
}

event.on('bc',abc)
event.on('bc',abc1)
event.emit('bc',6,6)