//My ForEach sample separate
function myForEach(arr, func) {
	for(var i = 0; i < arr.length; i++) {
		func(arr[i])
	}
}


myForEach([1,2,3], function (el) {
	console.log(el)
})

//My ForEach extended to Array
Array.prototype.myForEach = function (func){
	for(var i = 0; i < this.length; i++) {
		func(this[i])
	}
}

var arr = [2,3,4]
arr.myForEach(function (el){
	console.log(el)
})