var btnP1 = document.querySelector("#p1")
var btnP2 = document.querySelector("#p2")
var btnReset = document.querySelector("#reset")

var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")

var p1Score = 0
var p2Score = 0

var gameOver = false
var maxScore = 5

btnP1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++
		if(p1Score === maxScore) {
			gameOver = true
		}
		p1Display.textContent = p1Score
	}
})

btnP2.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++
		if(p2Score === maxScore) {
			gameOver = true
		}
		p2Display.textContent = p2Score
	}
})
