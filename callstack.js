// passing the function inside the function on the basis of the lifo operation like dsa the outo=put parameter is like the lifo operation.
const one=(a,b)=>{
    console.log("from the first function: ",a+b)
}
const teo=()=>{
    one(2,3)
 console.log("from the second function: ")

}
const three=()=>{
  teo();
  console.log("from the third function:")
}
three();
