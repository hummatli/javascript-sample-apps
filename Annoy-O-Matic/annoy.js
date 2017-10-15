
//Version 1
// var answer = "no"

// while (answer !== 'yes' && answer !== 'yeah') {
// 	answer = prompt("Are we there yet");
// }

// alert("Yay, we finally made it");



//Version 2
var answer = "NO"

while (answer.indexOf("yes") < 0 && answer.indexOf("yeah") < 0) {
	answer = prompt("Are we there yet");
}

alert("Yay, we finally made it");