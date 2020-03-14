window.onload = function(){
  var el =document.querySelector(".floating-nav__wrapper")
  var position = el.getAttribute("position")
  if(position == "right"){
    el.style.right = "1em";
  }
  else if(position == "left"){
    el.style.left = "1em";
  }
};