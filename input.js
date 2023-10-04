// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// // readline.question('why are you here ?')
// readline.question('what is your name ?',name=>{
//    console.log(`hey there this is ${name}`);
// setTimeout(()=>{
//     console.log(`welcome mr. ${name}`)
// },2000)

//    readline.close();
// })

// const prompt= require('prompt-sync')();
// const name=prompt('what is your name ?')
// console.log(`my name is ${name}`)
// const num=prompt('enter a number: ')
// console.log("your number +4 is:  ",Number(num)+4)

const prompt = require("prompt-sync")({ sigint: true });

const generated = Math.floor(Math.random() * 10) + 1;
let countTrue = false;

while (!countTrue) {
  let guess = prompt("guess a number between 1 to 10 : ");
  guess = Number(guess);
  if (guess === generated) {
    console.log("congrats you guess the number the right...! ");
    countTrue = true;
  console.log("the generated number is: ",generated)

  } else {
    console.log("nope..! Try again..");
  console.log("the generated number is: ",generated)

  }
}
