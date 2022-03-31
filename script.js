
let player = document.querySelector("#player")
let obstacle = document.querySelector("#obstacle")
let ground = document.querySelector("#ground")
let cloud = document.querySelector("#cloud")
let score = document.querySelector("#score")
let gameOver = document.querySelector("#gameOver")


let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score: <b>${playerScore}</b>`;

}


window.addEventListener("keydown", (e) => {
	let playerScore = 0;
        interval = setInterval(scoreCounter, 600);
	
    if (e.key == "ArrowUp")
        if (player.classList != "jump") {
            player.classList.add("jump");
          
            setTimeout(() => {
                player.classList.remove("jump");
            }, 500);
			
		
			
        }
	

});


var death = setInterval(function(){
	var topPlayer= parseInt(window.getComputedStyle(player).getPropertyValue("top"))
	var leftObstacle= parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
	
	if(leftObstacle < 30 && leftObstacle > 0 && topPlayer >= 130){
		obstacle.style.animation = "none"
		obstacle.style.display = "none"
		ground.style.display = "none"
		cloud.style.display = "none"
		gameOver.style.display = "block"
		
	}
	
	
}, 10)

	





