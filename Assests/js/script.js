var timeLeft = 60; //10 seconds a question
var currentQuestion = 0;
var score = 0;
 
var wrongPenalty = 10; //Lose 10 seconds if wrong
 
var startingScreen = document.getElementById("startingScreen");
var questionScreen = document.getElementById("questionScreen");
var questionText = document.getElementById("question");
var answerText = document.getElementById("answers");
 
document.getElementById("startButton").addEventListener("click", function(){
    var timer = setInterval(function timeFunction(){
        document.getElementById("startTimer").innerHTML = "Time: " + timeLeft + "&nbsp"+"seconds";
 
        timeLeft -= 1;
        if(timeLeft <= 0){
            clearInterval(timer);
            document.getElementById("startTimer").innerHTML= "Time is up!";
        }
    }, 1000);
    console.log(startTimer);
    beginQuiz();
});
 
const questions = [
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
        answers: ["Starman", "Sputnik 1", "Stardust 1", "Spoonwood 12"],
        correctAnswer: "Sputnik 1",
    }
]
 
function beginQuiz() {
    startingScreen.setAttribute("class", "hide")
    questionScreen.removeAttribute("class", "hide");
    var showQuestion = questions[currentQuestion];
    questionText.innerHTML = showQuestion.question;
    var showAnswers = questions[currentQuestion].answers;
    answerText.innerHTML = "";
    showAnswers.forEach(function(answerChoice) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", answerChoice);
        choiceBtn.setAttribute("class", "choiceButton");
        choiceBtn.textContent = answerChoice;
        answerText.appendChild(choiceBtn);
        choiceBtn.onclick = answer;
    });
}

function answer(user){
    var userChoice = user.target;
    if (userChoice.matches("answers")){
        var makeDiv = document.createElement("makeDiv");
        if (userChoice.textContent == questions[currentQuestion].correctAnswer) {
            score ++;
        }
        else {
            timeLeft = timeLeft - wrongPenalty;
        }
        }
        currentQuestion++;
        
        if (currentQuestion >= questions.length) {
            document.getElementById("makeDiv").innerHTML = "You have finished the quiz!" + "You got " + score + "/" + questions.length + "and ended with a score of" + timeLeft + "!";
        }
        else {
            beginQuiz();
        }
}