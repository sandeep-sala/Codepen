function createEvent(){
    k = document.getElementsByClassName("terminal_input")[document.getElementsByClassName("terminal_input").length-1];
    k.focus();
    k.addEventListener('keydown', (e) => {
    if (e.keyCode == 13)
        if(e.target.value == "clear"){
            clearTerminal();
        }else{
            changeContent(e);
        }
    });
}

function clearTerminal(){
    document.getElementById("terminal_body").innerHTML = ""
    k=`<div class="terminal__text">Type anything hit Enter / Type clear to clear screen</div>
            <div class="terminal_main">
                <div class="terminal_input_left">
                    <span class="user_msg">sandy@root:</span><span class="user_loc">~</span><span class="user_doll">$</span>
                </div>
                <input class="terminal_input" type="text">
            </div>`
    document.getElementById("terminal_body").innerHTML = k
    createEvent();
}

function changeContent(e){
    e.target.setAttribute("disabled","disabled");
    var div = document.createElement("DIV");
    div.className = "terminal__text"
    div.textContent = "You have entered  "+e.target.value
    document.getElementById("terminal_body").appendChild(div)
    var input_div = document.createElement("DIV");
    input_div.className = "terminal_main"
    input_div.innerHTML = '<div class="terminal_input_left"><span class="user_msg">sandy@root:</span><span class="user_loc">~</span><span class="user_doll">$</span></div><input class="terminal_input" type="text">'
    document.getElementById("terminal_body").appendChild(input_div)
    createEvent()
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementsByClassName("terminal_input")[document.getElementsByClassName("terminal_input").length-1].onblur = function (event) { 
        var blurEl = this; 
        setTimeout(function() {
            blurEl.focus()
        }, 10);
    };


createEvent();
dragElement(document.getElementById("terminal"));