//asking for the users age
var age = prompt("What is your age?");

//getting the current year
var date = new Date();
var year = date.getFullYear();

//subtracting age from current year
var birthYear = year - age;

//printing it to the screen
document.write(birthYear);
