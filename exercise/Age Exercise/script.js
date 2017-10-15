var age = Number(prompt("What is your age"))
//var age = prompt("What is your age")

if (age < 0) {
	console.log("Age could not be smaller than 0")

} else { 
	
	if (age === 21) {
		console.log("Happy 21st birthday")
	}

	if (age % 2 === 1 ) {
		console.log("Your age is odd")
	}

	if (age % Math.sqrt(age) === 0) {
		console.log("Perfect Square")
	}

	console.log("Your age is " + age)

}



