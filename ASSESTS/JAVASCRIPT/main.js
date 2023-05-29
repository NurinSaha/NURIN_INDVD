function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

cont header= document.querySelector("heading");
Window.addEventListener ("scroll,function() {
heading.classList.toggle ("sticky",window.scrollY > 100);
});


$("button.search").on('click',function(){
$(".search-popup").addClass("visible");
});

$(".search-popup .btn-close").on('click',function(){
$("search-popup").removeClass("visible);
});

$(document).keyup(function(e){
if(e.key=== "Escape"){
$(".search-popup").removeClass("visible");
}
});
