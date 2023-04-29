var hr=0;
var min=0;
var sec=0;
var isStop=true;
function start(){
    if(isStop==true){
        isStop=false;
        timer();
    }

}
function stop(){
    isStop=true;
}

function restart(){
    isStop=true;
    sec=0;
    hr=0;
    min=0;
    stopW.innerHTML="00:00:00";

}

function timer(){
    if (isStop==false){
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }if(min==60){
            min=0;
            hr++;
        }
        if(sec<10){
           sec="0"+sec;
        }if(min<10){
            min="0"+min;
         }
         if(hr<10){
            hr="0"+hr;
         }
        stopW.innerHTML= hr+":"+min+":"+sec;
        setTimeout("timer()",1000);
    }
}
