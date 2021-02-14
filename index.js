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

    for (let i = 0; i < h; i++){
        console.log("iteration ", i)
        //document.createElement("SPAN");
        document.querySelector(".hours-dot").style.backgroundColor = "red";
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

