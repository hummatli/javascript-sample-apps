
//printing in reverse ordder
function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([2,5,7,9])

//is Uniform
function isUniform(arr) {
	
	var first = arr[0]

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false
		}
	}

	return true
}

console.log(isUniform([3,3,3,3]))
console.log(isUniform([3,3,3,"eee"]))


//Sum Array
function sumArray(arr) {
	var sum = 0

	arr.forEach(function (el) {
		sum += el
	})

	return sum
}


console.log(sumArray([3,5,6]))

//Maximum

function max(arr) {
	var max = arr[0]

	arr.forEach(function (el) {
		if(el > max) {
			max = el
		}
	})

	return max
}


console.log(max([3,4,1]))









