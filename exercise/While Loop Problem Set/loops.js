
console.log("PRINTING NUMBERS BETWEAN -10 AND 19 ")
var n = -10
while (n <= 19) {
	console.log(n)
	n++
} 

console.log("PRINTING EVEN NUMBERS BETWEAN 10 AND 40 ")
var n = 10

//Short version
while (n <= 40) {
	console.log(n)
	n+=2
} 

//Long version
// while (n <= 40) {
// 	if(n % 2 === 0) {
// 		console.log(n)
// 	}
// 	n++
// } 



console.log("PRINTING ODD NUMBERS BETWEAN 300 AND 333 ")

// //Short version
// var n = 301
// while (n <= 333) {
// 	console.log(n)
// 	n+=2
// } 

//Long version
var n = 300
while (n <= 333) {
	if(n % 2 === 1) {
		console.log(n)
	}
	n++
} 


console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEAN 5 AND 50 ")

// //Short version
// var n = 301
// while (n <= 333) {
// 	console.log(n)
// 	n+=2
// } 

//Long version
var n = 5
while (n <= 50) {
	if(n % 5 === 0 && n % 3 === 0) {
		console.log(n)
	}
	n++
} 

