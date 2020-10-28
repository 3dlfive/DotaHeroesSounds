/*document.querySelector("button").addEventListener("click", function() {
 alert("I got clicked!");
});*/

/* document.querySelectorAll("button")[1].addEventListener("click", function() {
  alert("I got clicked!");
});
*/
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnim(event.key);
});
for (var i = 0; i <= document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnim(this.innerHTML);
  });

};



function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/riki.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/pudge.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/tinker.mp3");
      snare.play();
      break;
    case "d":
      var tome1 = new Audio("sounds/meepo.mp3");
      tome1.play();
      break;
    case "j":
      var tome2 = new Audio("sounds/slark.mp3");
      tome2.play();
      break;
    case "k":
      var tome3 = new Audio("sounds/Techies.mp3");
      tome3.play();
      break;
    case "l":
      var tome4 = new Audio("sounds/sniper.mp3");
      tome4.play();
      break;
    default:
      console.log;
  }
}

function buttonAnim(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
