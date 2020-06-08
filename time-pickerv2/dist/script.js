var c_t = "";
function timepicker(el,S){
    var div = document.querySelector('.timepicker_wrapper')
    function pad(n) {
        var len = 2 - (''+n).length;
        return (len > 0 ? new Array(++len).join('0') : '') + n
      }
      
    if (S == 'a'){
        html = "";
        for(i=1;i<=12;i++){
            html += '<option value="'+pad(i)+'">'+pad(i)+'</option>'
        }
        document.querySelector('.timepicker_hour').innerHTML = html

        html = "";
        for(i=0;i<=59;i++){
            html += '<option value="'+pad(i)+'">'+pad(i)+'</option>'
        }
        document.querySelector('.timepicker_minute').innerHTML = html

        c_t = "";
        c_t = el;
        document.querySelector('.timepicker_wrapper').style.display = "block";
        
    }
    if(S == 'c'){
        document.querySelector('.timepicker_hour').value = "";
        document.querySelector('.timepicker_minute').value = "";
        document.querySelector('.timepicker_ampm').value = "";
        c_t.value = "";
    }
    if(S == 'x'){
        div.style.display = "block";
    }
    if(S == 's'){
        var hr = document.querySelector('.timepicker_hour').value;
        var min = document.querySelector('.timepicker_minute').value;
        var am = document.querySelector('.timepicker_ampm').value;
        if(hr != "" && min != "" && am != ""){
            c_t.value = hr+":"+min+" "+am;
            div.style.display = "none";
        }
        
        
    }
}

function changeTimepickerheader(el ,S){
    var k = document.querySelectorAll('.timepicker_header b')
    if(S == '1'){
        k[0].innerHTML = el.value
    }
    if(S == '2'){
        k[1].innerHTML = el.value
    }
    if(S == '3'){
        k[2].innerHTML = el.value
    }
}