/* 
Create a home page with a header of the quiz name and an explanation.

Make a 'Start' button on the home page which directs you to the first page.

Once you arrive on the first page, a timer must start for the duration of the quiz.

There must be multple questions with multiple choice answers, each having it's own page.

If a question is answered wrong, time must be subtracted from the time.

Once the all the questions are answered or the clock hits zero, the game is over.

Once the game is over, there must be a place where initials and score can be saved. Prior initials and score must show as well.
*/

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

 function startTimer(){
   var obj = document.getElementById("timer");
   var seconds;

   seconds = Number(obj.display.value);
   if (seconds <= 0){   
      clearInterval(seconds);
   }
    else{
            seconds--;
        }

  obj.display.value = seconds;
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
   {
      question: 'What is the study of reptiles and amphibians called?',
      answers: [
         { text: 'Batrachology', correct: false },
         { text: 'Herpetology', correct: true },
         { text: 'Helminthology', correct: false },
         { text: 'Ichthyology', correct: false },
      ]
   },

   {
      question: 'What is the only bird that can fly backwards?',
      answers: [
         { text: 'Penguin', correct: false },
         { text: 'Crow', correct: false },
         { text: 'Golden Eagle', correct: false },
         { text: 'Hummingbird', correct: true },
      ]
   },

   {
      question: 'Which is the longest living insect?',
      answers: [
         { text: 'Queen Ant', correct: false },
         { text: 'Queen of Termites', correct: true },
         { text: 'Murder Hornet', correct: false },
         { text: 'Hercules Beetle', correct: false },
      ]
   },

   {
      question: 'Flying or non-flying, which is the largest living species of bird?',
      answers: [
         { text: 'Ostrich', correct: true },
         { text: 'Emu', correct: false },
         { text: 'Osprey', correct: false },
         { text: 'Bearded Vulture', correct: false },
      ]
   },

   {
      question: 'Where is the largest national park in world located?',
      answers: [
         { text: 'Namibia', correct: false },
         { text: 'Canada', correct: false },
         { text: 'Greenland', correct: true },
         { text: 'Alaska', correct: false },
      ]
   },

]