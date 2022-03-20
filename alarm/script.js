console.log("hello ");
const sumbit = document.getElementById("submit");
sumbit.addEventListener('click', setalarm); 
var audio = new Audio('rining.mp3');
function ringing() {
    audio.play();
    
}
function setalarm() {
    // console.log("hello q");
    let text = document.getElementById("alarm");
    // console.log(text.value);
    let now = new Date();
    console.log(now);
    let alarmdate = new Date(text.value)
    // console.log(alarmdate);
    let minius =  alarmdate - now;
    console.log(minius); 
    if (minius >= 0){
        console.log("now time began");
        setTimeout(() => {
            console.log("ringning now");
            ringing();
        }, minius);
        
    }
    else{
        console.log("nothing goona happen");
    }
}