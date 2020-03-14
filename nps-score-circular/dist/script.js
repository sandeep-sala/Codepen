function ChangeContent(el){
	var contentvalue = parseInt(el.getAttribute("value"))
	if( contentvalue <= 2)
		document.getElementById("circular-bar-content-img").setAttribute("src","https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Sad_Face_Emoji_Icon_ios10_large.png")
	else if(contentvalue > 2 && contentvalue <= 5)
		document.getElementById("circular-bar-content-img").setAttribute("src","https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/232/face-with-one-eyebrow-raised_1f928.png")
	else if(contentvalue > 5 && contentvalue <= 8){
		document.getElementById("circular-bar-content-img").setAttribute("src","https://i.pinimg.com/originals/31/6a/64/316a64a45f9c0f6652daf822876dbfe4.png")
	}
	else if(contentvalue >= 9){
		document.getElementById("circular-bar-content-img").setAttribute("src","https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png")
	}
}
function setContent(el){
	var temp_value = document.getElementsByClassName("circle-value")
	for(let i=0; i<temp_value.length;i++){
		temp_value[i].style.strokeWidth= "1.5em"
	}
	el.style.strokeWidth= "1.8em"
	contentvalue = parseInt(el.getAttribute("value"))
	if(contentvalue < 10){document.getElementById("value-0"+el.getAttribute("value")).style.strokeWidth= "2em"}
		else{document.getElementById("value-"+el.getAttribute("value")).style.strokeWidth= "2em"} 
}