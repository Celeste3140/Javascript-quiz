document.getElementById("timer").addEventListener("click", function(){
    var timeleft = 50;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up! Good Job!🥳"
    }
    }, 1000);

    console.log(countdown);
});