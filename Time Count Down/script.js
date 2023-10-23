let count = document.getElementById('countdown');
let time = 100;
let promoTime = time * 60;

function startCountDown(){
    let promoTimer = setInterval(() =>{
        if(promoTime <= 0){
            clearInterval(promoTimer);
            count.innerHTML = "Time is up";
        }
        else{
            promoTime--;
            let hour = Math.floor(promoTime/3600)%24;
            let min = Math.floor(promoTime/60)%60;
            let sec = Math.floor(promoTime%60);
            count.innerHTML = `Time: ${format(hour)} : ${format(min)} : ${format(sec)}`;            
        }
    }, 1000);

    function format(t){
        return t<10 ? `0${t}` : t;
    }
}
startCountDown();