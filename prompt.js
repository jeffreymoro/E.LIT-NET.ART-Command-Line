/*
// Link to the specific page. [Original]
function prompt()
      {
        var promptElement = document.getElementById("input");
        var promptInput = promptElement.value;
        window.location.href = "http://elit.jeffreymoro.com/" + promptInput.toLowerCase();
      };
*/

// Get a game from the Internet Archive
function gamePrompt(){
  var gameSearch = prompt("What game would you like to play?");
  window.location.href = "https://archive.org/details/internetarcade?and[]=" + gameSearch.toLowerCase();
};

// Hey it's a little text adventure right here!

// Link to the specific page. [Revised w/ easter eggs]
function commandPrompt(){
  var promptElement = document.getElementById("input");
  var promptInput = promptElement.value;
  var promptInput = promptInput.toLowerCase();
  if (promptInput === "gallery") {
    window.location.href = "http://elit.jeffreymoro.com/gallery";
  } else if (promptInput === "course"){
    window.location.href = "http://elit.jeffreymoro.com/course";
  } else if (promptInput === "screening"){
    window.location.href = "http://elit.jeffreymoro.com/screening";
  } else if (promptInput === "about"){
    window.location.href = "http://elit.jeffreymoro.com/about";
  } else if (promptInput === "otters"){
    window.location.href = "https://www.youtube.com/watch?v=epUk3T2Kfno";
  } else if (promptInput === "five college digital humanities" || promptInput === "5colldh"){
    window.location.href = "http://5colldh.org";
  } else if (promptInput === "game") {
    // This is where the text adventure will go, when I finally get it working.
    if (window.screen.width > 900){
        gamePrompt();
    } else {
      window.location.href = "https://archive.org/details/internetarcade"
    };
  } else if (promptInput === "secrets") {
    alert("Wouldn't you like to know?");
  } else {
    alert("I'm afraid I can't do that.");
  }
};

// Let you type wherever!
function inputFocus(){
    document.getElementById("input").focus();
};
window.onkeydown = inputFocus;

// Execute the prompt on Enter.
jQuery(document).ready(function()
{
    jQuery(document).keypress(function(e) {
        if(e.which == 13) {
            commandPrompt();
        }
    });
});
