var s = document.createElement("style");
s.innerHTML =
  "@keyframes shine-anime {0% {background-position-x: -500%;}100% {background-position-x: 500%;}}";
document.getElementsByTagName("head")[0].appendChild(s);
var r = document.createElement("div");
r.innerHTML = "Hello, World!";
r.style.fontWeight = "bold";
r.style.fontSize = "40px";
r.style.background = "linear-gradient(90deg, #000000, #21e612, #000)";
r.style.letterSpacing = "5px";
r.style.webkitBackgroundClip = "text";
r.style.backgroundClip = "text";
r.style.webkitTextFillColor = "transparent";
r.style.backgroundRepeat = "no-repeat";
r.style.backgroundSize = "80%";
r.style.animation = "shine-anime 5s linear infinite";
r.style.animationFillMode = "both";
r.style.animationDirection = "alternate";
var k = document.getElementsByTagName("body")[0];
k.style.height = "100vh";
k.style.margin = "0";
k.style.display = "grid";
k.style.placeItems = "center";
k.style.font = "8vw system-ui";
k.style.backgroundColor = "#000";
k.appendChild(r);