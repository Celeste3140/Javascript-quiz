document.getElementById("timer").addEventListener("click", function(){
    var timeleft = 50;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    " "+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up! Good Job!🥳"
    }
    }, 1000);
    console.log(countdown);
})
const startButton = document.getElementById("timer")
const nextBtn = document.getElementById("nextButton")
const instructionsP = document.getElementById("instructions")
const questionContainerEl = document.getElementById("question-box")
const questionEl = document.getElementById("question")
const answerButtonsEl = document.getElementById("answerButton")

let randomQuestions, currentQuestion 

startButton.addEventListener("click", startGame)
nextBtn.addEventListener("click",() => {
    currentQuestion++
    setNextQuestion()
})

function startGame () {
startButton.classList.add("hide")
randomQuestions = question.sort(() => Math.random() - .5)
currentQuestion = 0
questionContainerEl.classList.remove("hide")
instructionsP.classList.add("hide")
setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestion])

}
function showQuestion(question) {
    questionEl.innerText = question.questions
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}
function resetState () {
    clearStatusClass(document.body)
    nextBtn.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}
function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsEl.children).forEach(button => {
     setStatusClass(button, button.dataset.correct)
 })
 if (randomQuestions.length > currentQuestion + 1) {
    nextBtn.classList.remove("hide")
 } else {
     startButton.innerText = "Restart"
     startButton.classList.remove("hide")
 }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("incorrect")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const question = [
    {
        questions: "What is the correct way to write a function?",
        answers: [
            { text: "function=myFunction()", correct: false},
            { text: "function myFunction[]", correct: false},
            { text: "function myFuction()", correct: true},

        ]
    }


]
