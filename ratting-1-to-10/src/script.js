function setValuetoSome(el){
    el.parentElement.setAttribute("zQPK","true")
}
function changeColorRatingzBarAll(el){
    current_hover_value = parseInt(el.childElementCount);
    if(el.getAttribute("zQPK") == "false"){
        for(var i=0; i<=current_hover_value ;i++){
            if (el.children[i] != undefined) {
                el.children[i].style.color ="black"
                el.children[i].style.backgroundColor ="white"    
                }
        }   
    }
}

function changeColorRatingzBar(el){
    current_hover_value = parseInt(el.getAttribute("value"));
    for(var i=current_hover_value; i<=current_hover_value ;i++){
        if (el.parentElement.children[i] != undefined) {
            el.parentElement.children[i].style.color ="black"
            el.parentElement.children[i].style.backgroundColor ="white"
        }
    }
}

function changeColorRatingvBar(el){
    current_hover_value = parseInt(el.getAttribute("value"));
    for(var i=0; i<current_hover_value ;i++){
        if (current_hover_value <= 5){
            el.parentElement.children[i].style.color ="white"
            el.parentElement.children[i].style.backgroundColor ="red"
        }
        if (5 < current_hover_value && current_hover_value <= 8){
            el.parentElement.children[i].style.color ="white"
            el.parentElement.children[i].style.backgroundColor ="orange"
        }
        if (8 < current_hover_value){
            el.parentElement.children[i].style.color ="white"
            el.parentElement.children[i].style.backgroundColor ="green"
            }
        }
    for(var j=current_hover_value; j<=el.parentElement.childElementCount ;j++){
        if (el.parentElement.children[j] != undefined) {
            el.parentElement.children[j].style.color ="black"
            el.parentElement.children[j].style.backgroundColor ="white"
        }
    }
}
 