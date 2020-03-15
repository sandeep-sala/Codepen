var timeSelected = "06"
var ampmSelected = "AM"
var minSelected = "00"
var btn = document.getElementById("appt");
window.onclick = function(event) {
	if (event.target == document.getElementById("timepicker-popup-wrapper-modal_XPQS")) {
	document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "none";
	}
}
btn.onclick = function() {
	document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "block";
}

function changehourselectbackgroundnormal(el){
	el.style.backgroundColor =""
	el.style.color ="black"			
}
function changehourselectbackground_XPQS(value){
	var l = document.getElementById("timepicker-hand")
	l.style.display= "block"
	if( value == "10"){
		l.style.top = "78px"
		l.style.left = "40px"
		l.style.transform = "rotate(29deg)"	
	}
	if(value == "09"){
		l.style.top = "94px"
		l.style.left = "34px"
		l.style.transform = "rotate(0deg)"
	}
	if(value == "08"){
		l.style.top = "110px"
		l.style.left = "38px"
		l.style.transform = "rotate(-30deg)"
	}
	if(value == "07"){
		l.style.top = "122px"
		l.style.left = "50px"
		l.style.transform = "rotate(-58deg)"
	}
	if(value == "06"){
		l.style.top = "127px"
		l.style.left = "67px"
		l.style.transform = "rotate(-90deg)"
	}
	if(value == "05"){
		l.style.top = "122px"
		l.style.left = "83px"
		l.style.transform = "rotate(-119deg)"
	}
	if(value == "04"){
		l.style.top = "110px"
		l.style.left = "96px"
		l.style.transform = "rotate(-150deg)"
	}
	if(value == "03"){
		l.style.top = "94px"
		l.style.left = "unset"
		l.style.right = "35px"
		l.style.transform = "rotate(0deg)"
	}
	if(value == "02"){
		l.style.top = "78px"
		l.style.left = "95px"
		l.style.transform = "rotate(150deg)"
	}
	if(value == "01"){
		l.style.top = "65px"
		l.style.left = "84px"
		l.style.transform = "rotate(120deg)"
	}
	if(value == "11"){
		l.style.top = "66px"
		l.style.left = "50px"
		l.style.transform = "rotate(58deg)"
	}
	if(value == "12"){
		l.style.top = "60px"
		l.style.left = "67px"
		l.style.transform = "rotate(90deg)"
	}
}
function changehourselectbackground(el){
	el.style.backgroundColor = "green"
	el.style.color = "white"
	changehourselectbackground_XPQS(el.getAttribute("value"));
}
function changehourValue(el){
	timeSelected = el.getAttribute("value")
	el.style.backgroundColor = "green"
	el.style.color = "white"
	changehourselectbackground_XPQS(timeSelected);
	document.getElementById("timepicker-value-hour").innerHTML = timeSelected
	document.getElementById("timepicker-hand").style.display = "none"
	showtimepickerMinute()
}
function changeampmValue(el){
	ampmSelected = el.innerHTML
	document.getElementById("timepicker-value-ampm").textContent = ampmSelected
}
function changeminuteValue(el){
	minSelected = el.innerHTML
	document.getElementById("timepicker-hand").style.display = "none"
	document.getElementById("timepicker-value-minute").textContent = minSelected
	showtimepickerHour()
}
function showtimepickerHour(){
	document.getElementById("timepicker-time-minute").style.display = "none"
	document.getElementById("timepicker-time-hour").style.display = "block"
	document.getElementById("timepicker-hand").style.display = "block"
}
function showtimepickerMinute(){
	document.getElementById("timepicker-time-hour").style.display = "none"
	document.getElementById("timepicker-time-minute").style.display = "block"
	document.getElementById("timepicker-hand").style.display = "none"	
}
function convertTime12to24(time12h){
	var [time, modifier] = time12h.split(' ');
	var [hours, minutes] = time.split(':');
	if (hours === '12') {hours = '00';}
	if (modifier === 'PM') {hours = parseInt(hours, 10) + 12;}
	return hours+":"+minutes;
}
document.getElementById("timepicker-value-hour").addEventListener("click",function(){showtimepickerHour()});
document.getElementById("timepicker-value-minute").addEventListener("click",function(){showtimepickerMinute()});
document.getElementById("timepicker-popup-Buttons-cancel_XPSQ").addEventListener("click",function(){document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "none";});
document.getElementById("timepicker-popup-Buttons-ok_XPSQ").addEventListener("click",function(){
	document.getElementById("timepicker-popup-wrapper-modal_XPQS").style.display = "none";
	document.getElementById("appt").value = convertTime12to24(timeSelected +":"+minSelected+" "+ampmSelected);
});
