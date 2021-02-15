const timer = document.querySelector('.timer')


function getTime(){
    let date = new Date();

    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());

    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }

    document.querySelector(".binary-hours").innerHTML = dec2bin(h);
    let binary_h = dec2bin(h);
    document.querySelector(".binary-minutes").innerHTML = dec2bin(m);
    let binary_m = dec2bin(m);
    document.querySelector(".binary-seconds").innerHTML = dec2bin(s);
    let binary_s = dec2bin(s);

    for (let i = 0; i < binary_h.length; i++){
        console.log("iteration ", i)
        if (binary_h[i] == '1'){
            document.getElementsByTagName("span")[i].style.backgroundColor = "red";
        }
        else{
            document.getElementsByTagName("span")[i].style.backgroundColor = "grey";
        }
        
    }

    for (let i = 0; i < binary_m.length; i++){
        console.log("iteration binary minutes", i)
        if (binary_m[i] == '1'){
            console.log('red ')
            $('span.minutes-dot').css("background-color", "red")[i];
        }
        else{
            console.log('grey ')
            $('span.minutes-dot').css("background-color", "grey")[i];
        }
        
    }
    
    if (h >= 6 && h < 12){
        document.querySelector(".welcome").innerHTML = "Good morning";
    } else if (h >= 12 && h < 18){
        document.querySelector(".welcome").innerHTML = "Good afternoon";
    } else{
        document.querySelector(".welcome").innerHTML = "Good evening";
    }

    return timer.innerHTML = h + ":" + m + ":" + s;
}


getTime();

