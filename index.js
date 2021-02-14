const timer = document.querySelector('.timer')


function getTime(){
    let date = new Date();

    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    
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

