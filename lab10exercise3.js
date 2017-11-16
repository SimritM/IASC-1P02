function add(){

//get the value from the two input type texts
var num1 = document.getElementById("num1").value
var num2 = document.getElementById("num2").value

//add the two numbers together
var sum = Number(num1) + Number(num2);

//put the value to the screen
document.getElementById("output").innerHTML = sum
}
