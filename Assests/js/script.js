document.getElementById("startButton").addEventListener("click", function(){
    var timeLeft = 60;

    var timer = setInterval(function timeFunction(){
        document.getElementById("startTimer").innerHTML = timeLeft + "&nbsp"+"seconds";

        timeLeft -= 1;
        if(timeLeft <= 0){
            clearInterval(timer);
            document.getElementById("startTimer").innerHTML= "Time is up!";
        }
    }, 1000);
    console.log(startTimer);
});