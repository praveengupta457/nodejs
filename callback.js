const fs= require('fs')

// fs.appendFile('callback.txt','that i am using it to learn and read this file by putting the output to it:',function(error){
// if(error){
//     console.log(error)
// }else{
//     console.log("the file has been written..!")
// }
// })
const data=fs.readFileSync('callback.txt')
console.log(data.toString())
console.log("program ended,'\n")

fs.readFile('new.txt',function(error,data){
    if(error){
        console.log(error)
    }
    else{
        console.log(data.toString())
    }
})
console.log("program ended")