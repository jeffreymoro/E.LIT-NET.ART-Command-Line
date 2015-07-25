/*
// Link to the specific page. [Original]
function prompt()
      {
        var promptElement = document.getElementById("input");
        var promptInput = promptElement.value;
        window.location.href = "http://elit.jeffreymoro.com/" + promptInput.toLowerCase();
      };
*/

// Link to the specific page. [Revised w/ easter eggs]
function prompt(){
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
  } else if (promptInput === "five college digital humanities" || "5colldh"){
    window.location.href = "http://5colldh.org";
  } else {
    alert("I'm afraid I can't do that.");
  };
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
            prompt();
        }
    });
});
