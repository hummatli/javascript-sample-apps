var btn = document.querySelector("button")

//we can take body with this way too
var body = document.querySelector("body")


//First solution. with changing style object
// var isWhite = true 
// btn.addEventListener("click", function() {
// 		if(isWhite) {
// 			body.style.background = "purple"
// 		} else {
// 			body.style.background = "white"		
// 		}
// 		isWhite = !isWhite	
// 	})


//Second solution with CSS class
btn.addEventListener("click", function() {

		document.body.classList.toggle("purple")
	})