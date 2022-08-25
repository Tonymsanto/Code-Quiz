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

document.getElementById("startButton").addEventListener("click", function(){
    var questions = [
        { 
            question: "How many bones are in the human body?",
            answers: ["201", "202", "205", "206"],
            correctAnswer: "206",
        },
        { 
            question: "What is the hardest natural substance on Earth?",
            answers: ["Diamond", "Opal", "Ruby", "Emerald"],
            correctAnswer: "Diamond",
        },
        { 
            question: "Humans and chimpanzees share roughly how much DNA?",
            answers: ["74%", "86%", "88%", "98%"],
            correctAnswer: "98%",
        },
        { 
            question: "Which Apollo moon mission was the first to carry a lunar rover?",
            answers: ["Apollo 1", "Apollo 11", "Apollo 15", "Apollo 19"],
            correctAnswer: "Apollo 15",
        },
        { 
            question: "At what temperature are Celsius and Fahrenheit equal?",
            answers: ["-80", "-40", "0", "32"],
            correctAnswer: "-40",
        },
        { 
            question: "What was the name of the first man-made satellite launched by the Soviet Union in 1957?",
            answers: ["Starman", "Sputnik 1", "Stardust 1", ""],
            correctAnswer: "Sputnik 1",
        }
    
    ]

})

localStorage.setItem(key, highScore)
let highScore = localStorage.getItem(key);