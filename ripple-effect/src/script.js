function showRippleEffect(event) {
  var span = document.getElementById("ripple_effect");
  span.style.height = "0px"
  span.style.width = "0px"
  var x = event.clientX;
  var y = event.clientY;
  span.style.display = "inline-block"
  span.style.top = y+"px"
  span.style.left = x+"px"
  span.style.height = "15px"
  span.style.width = "15px"
}