var btnP1 = document.querySelector("#p1")
var btnP2 = document.querySelector("#p2")
var btnReset = document.querySelector("#reset")

var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var numInput = document.querySelector("input")
var maxScoreDisplay = document.querySelector("#maxScoreDisplay")

var p1Score = 0
var p2Score = 0

var gameOver = false
var maxScore = 5


numInput.value = maxScore

btnP1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++
		if(p1Score === maxScore) {
			gameOver = true
			p1Display.classList.add("winner")
		}
		p1Display.textContent = p1Score
	}
})

btnP2.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++
		if(p2Score === maxScore) {
			gameOver = true
			p2Display.classList.add("winner")
		}
		p2Display.textContent = p2Score
	}
})

btnReset.addEventListener("click", function() {
	reset()
})

numInput.addEventListener("change", function() {
	maxScore = Number(this.value)
	maxScoreDisplay.textContent = maxScore
	reset()
})


function reset() {
	p1Score = 0
	p2Score = 0
	gameOver = false

	p1Display.classList.remove("winner")
	p2Display.classList.remove("winner")

	p1Display.textContent = p1Score
	p2Display.textContent = p2Score
}

