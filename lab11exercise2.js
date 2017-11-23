var nounArray= new Array();
nounArray = ["orange", "apple", "berries", "banana", "melon"];

var adjectiveArray= new Array();
adjectiveArray = ["nice", "cool", "pretty", "handsome"];

function generate(){
var noun = Math.round(Math.random()*4);
var adjective= Math.round(Math.random()*4);


document.getElementById('output').innerHTML=String(nounArray[noun] + adjectiveArray[adjective]);
}
