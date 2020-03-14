function change_span_name_to_file_name(el){
	if(el.files[0] != undefined || el.files[0] != null){
		var file_ext = el.files[0].name.split(".");
		file_ext = el.files[0].name.split(".")[file_ext.length - 1];
		document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.backgroundColor = "white"
		document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.padding = "1em"
		document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.boxShadow = "1px 1px 6px rgba(0, 0, 0, 0.2)"
		document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.borderRadius = "1em"
		document.getElementById("dragdropAlertMsg__XPS").style.display = "inline-block"
		file_name = el.files[0].name.split(".")
		file_length = file_name.length 
		file_ext = parseInt(parseInt(file_length) - 1) 
		if(el.files[0].name.length >= 15){
			file_name_mod = file_name[0].slice(0,15)+"... ."+file_name[file_name.length - 1]
		}else{
			file_name_mod = el.files[0].name
		}
		document.getElementById("dragdropAlertMsg__XPS").innerHTML = file_name_mod+' <span onclick="remove_file_from_attachment()" class="dragdropAlertMsgClose__XPS" style="color: #680cfb;">x</span>'
		document.getElementById("dragdropUploadBTN__XPS").style.display = "inline-block"
		document.getElementsByClassName("dragdropMsg__XPS")[0].style.display = "none"
		document.getElementsByClassName("dragdrop__XPS")[0].style.display = "none"
	}else{
		document.getElementById("dragdropAlertMsg__XPS").style.display = "inline-block"
		document.getElementById("dragdropAlertMsg__XPS").style.fontSize = "unset"
		document.getElementById("dragdropAlertMsg__XPS").style.color = "red"
		document.getElementById("dragdropAlertMsg__XPS").textContent = "No File Selected*" 
		document.getElementById("dragdropUploadBTN__XPS").style.display = "none"
	}
}
function remove_file_from_attachment(){
	document.getElementById("dragdropAlertMsg__XPS").innerHTML = ""
	document.getElementById("easychat-uploadfile__XPS").value = ""
	document.getElementById("dragdropUploadBTN__XPS").style.display = "none"
	document.getElementById("dragdropAlertMsg__XPS").style.display = "none"
	document.getElementsByClassName("dragdropMsg__XPS")[0].style.display = "block"
	document.getElementsByClassName("dragdrop__XPS")[0].style.display = "block"
	document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.backgroundColor = "unset"
	document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.padding = "0"
	document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.boxShadow = "unset"
	document.getElementsByClassName("dragdropafterSelect__XPS")[0].style.borderRadius = "unset"
}