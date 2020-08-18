var button1 = document.querySelector("#buttonP1");
var button2 = document.querySelector("#buttonP2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("#input");
var display1 = document.querySelector("#display1");
var display2 = document.querySelector("#display2");
var add = document.querySelector("#add")
var score1 = 0;
var score2 = 0;
var winningScore = 5
var gameOver = false




// player One section
button1.addEventListener("click",function(){
    if(!gameOver){
        score1++;
        if(score1 === winningScore){
            display1.classList.add("winner")
            gameOver = true
        }
    }
   display1.textContent = score1;
   
      
  })

//  player two section 
button2.addEventListener("click",function(){
    if(!gameOver){
        score2++;
        if(score2 === winningScore){
            display2.classList.add("winner")
            gameOver = true
        }
    }
   display2.textContent = score2;
   
      
  })

//   reset section
reset.addEventListener("click", function(){
    set()
})

function set(){
    display1.textContent = 0;
    display2.textContent = 0;
    display1.classList.remove("winner")
    display2.classList.remove("winner")
    score1 = 0;
    score2 = 0;
    gameOver = false
}

// input section
numInput.addEventListener("change", function(){
    var value = Number(numInput.value)
    add.textContent = value;
    winningScore =value;
    set()
})