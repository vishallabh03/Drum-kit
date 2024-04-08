// document.querySelector("button").addEventListener("click",function(){
//    alert("i got clicked");
//  });
//  we are callingfunction anonymousily
// we can all so specify the number like [1/2/3 and soo on ] but it  will so many line of code 



//Dectecring Button Press
var numberofdrums= document.querySelectorAll(".drum").length;
for ( var i=0;i<numberofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var music = this.innerHTML;
        makesound(music);
        animation(msuic);
  
    });
    
}
//Detecting keypboard press
document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
});

function makesound(key){
    switch (key) {
        case "w": 
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            
            break;

        case "a": 
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            
            break;

        case "s": 
            var snares= new Audio("sounds/snare.mp3");
            snares.play();
            
            break;

        case "d": 
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;

        case "j": 
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;

        case "k": 
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            
            break;

        case "l": 
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            
            break;
    
        default:console.log(music);
    } 

}
function animation(currentKey){
      var animated = document.querySelector("."+ currentKey);
      animated.classList.add("pressed"); 
      setTimeout(function(){
        animated.classList.remove ("pressed");
      },100 )
    
}
  