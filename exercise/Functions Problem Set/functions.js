//isEven

//Long way
// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

//Short way
function isEven(num) {
	return num % 2 === 0
}

console.log("4 is even " + isEven(4))
console.log("5 is even " + isEven(5))


//factorial

var factorial = function(num) {

	var result = 1

	for (var i = 2; i <= num; i++) {
		result *= i
	}

	return result
}

console.log("5! factorial is " + factorial(5))
console.log("1! factorial is " + factorial(1))
console.log("0! factorial is " + factorial(0))

function kebabToSnake(str) {
	return str.replace(/-/g, "_")
}

var str = "my-nice-variable"
console.log(str + " => " + kebabToSnake(str))


