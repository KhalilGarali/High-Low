var target = Math.floor(Math.random()*100)+1;
var attempts = document.getElementById("attempts");
var guesses = 0;

function shakeIt(){
    document.getElementById("shakeIt").className="shake";
}
function introHidden(){
    document.getElementById("preGameContent").setAttribute("style", "opacity: 0; pointer-events: none;");
    
}
function inGame(){
    document.getElementById("postGameContent").setAttribute("style", "opacity: 1; pointer-events: auto;");
}
function tasks(){
    shakeIt();
    introHidden();
    setTimeout("inGame();",1000); 
}
const arrowsAnime = [
    { transform: 'scale(1)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1.4)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' }
  ];
  
  const arrowsTiming = {
    duration: 1000,
    iterations: 1,
  }
function guess(){
    var guessedNum = document.getElementById("input").value;
    if(guessedNum>100 || guessedNum<0){
        alert("You need to guess a number between 0-100");
    }
    else{
        guesses+=1;
        if(guessedNum>target){
            document.getElementById("arrowDown").animate(arrowsAnime,arrowsTiming);
            document.getElementById("attempts").innerHTML= "Total attempts: " + guesses;
          
        }
        else if(guessedNum<target){
            document.getElementById("arrowUp").animate(arrowsAnime,arrowsTiming);
            document.getElementById("attempts").innerHTML= "Total attempts: " + guesses;
         
        }
        else if(guessedNum == target){
            document.getElementById("arrowDown").setAttribute("style", "display: none");
            document.getElementById("arrowUp").setAttribute("style", "display: none");
            document.getElementById("success").setAttribute("style", "display: block");
            if(guesses==1){
                document.getElementById("attempts").innerHTML= "You have guessed the number in " + guesses + " try!";
            }
            else{
                document.getElementById("attempts").innerHTML= "You have guessed the number in " + guesses + " tries!";
            }
            document.getElementById("input").disabled = true;
            document.getElementById("guess").disabled = true;
        }
    }
    
}
