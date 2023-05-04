// keydown: Keydown happens when the key is pressed down, and auto repeats if the key is pressed down for long.

// keypress: This event is fired when an alphabetic, numeric, or punctuation key is pressed down.

// keyup: Keyup happens when the key is released.

score = 0
audio = new Audio("music.mp3")
audio1 = new Audio("death.mp3")
audio2=new Audio("start.mp3")
btn=document.querySelector(".btn")
cross = true//score cam be increased
setInterval(() => {
    audio2.play()
}, 1000);



document.addEventListener('keydown', (e) => {
    console.log("key is" + e.key);

    if (e.key == "ArrowUp") {
        dino = document.querySelector(".dino")
        dino.classList.add("animate");
        audio.play()
        setTimeout(() => {
            dino.classList.remove("animate")
        }, 700);
    }
    else if (e.key == "ArrowRight") {
        dino = document.querySelector(".dino")
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = dinox + 60 + "px"
        
    }
    else if (e.key == "ArrowLeft") {
        dino = document.querySelector(".dino")
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = dinox - 60 + "px"
    }
   
})
//collision
setInterval(() => {
    bird=document.querySelector(".bird")
    dino = document.querySelector(".dino")
    obstacle = document.querySelector(".obstacle")
    gameover = document.querySelector(".gameover")
    //dino x
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"))
    by = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"))
    
    offsetx = Math.abs(dx - ox)
    offsety = Math.abs(dy-oy)
    // offsety1=Math.abs(dy-by)
    if (offsetx < 50 && offsety < 50 ){
        gameover.style.visibility = "visible"
        obstacle.classList.remove("obstacleani")
        dino = document.querySelector(".dino")
        bird.style.display="none"
        //    dino.style.display="none"
        dino.classList.add("deadimg")
        dino.classList.add("dead")
        deadimg = document.querySelector(".deadimg")
        deadimg.style.visibility = "visible"
        btn1=document.querySelector(".btn1")
        btn1.style.visibility="visible"
        setTimeout(() => {
            dino.classList.remove("deadimg")
            dino.classList.remove("dead")
            
        }, 3000);
        setInterval(() => {
            audio2.pause()
            
        }, 0);
        
        audio1.play()
    }
    
    else if (offsetx < 50 && cross) {
        score += 100
        updatescore(score)
        cross = false
        setTimeout(() => {
            cross = true
            
        }, 1000);
        anidur = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"))
        anidur = anidur - 0.2
        obstacle.style.animationDuration = anidur + "s"
        

    }
},
    100);
function updatescore(score) {
    scorecont.innerHTML = "your score: " + score

}
function jump(){
    dino = document.querySelector(".dino")
    dino.classList.add("animate");
    audio.play()
    setTimeout(() => {
        dino.classList.remove("animate")
    }, 700);

}
function leftrun(){
    dino = document.querySelector(".dino")
    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
    dino.style.left = dinox - 60 + "px"

}
function rightrun(){
    dino = document.querySelector(".dino")
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = dinox + 60 + "px"


}
function restart1(){
    window.location.reload();
  return false;
}
//bird
setInterval(() => {
    bird=document.querySelector(".bird")
    bird.style.visibility="visible"
}, 7000);
