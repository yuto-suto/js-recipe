const first=document.getElementById("number1")
const second=document.getElementById("number2")
const equal=document.getElementById("equal-button")
let result=document.getElementById("display")

const logvalue=function(e){
  console.log(e.target.value)
}
first.oninput=logvalue
second.oninput=logvalue

equal.onclick=function(){
  
}