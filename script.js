document.getElementById("timer").addEventListener("click", function(){
    var timeleft = 100;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    " "+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up! Good Job!🥳"
    }
    }, 1000);
   /*  question.addEventListener('click', false); {
        sec -= 5;
        document.getElementById('countdown').innerHTML='00:'+sec;
    };
    startTimer(); */
})
const myTimeout = setTimeout(gameOver, 100000);
const startButton = document.getElementById("timer");
const nextBtn = document.getElementById("nextButton");
const instructionsP = document.getElementById("instructions");
const questionContainerEl = document.getElementById("question-box");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answerButton");

startButton.addEventListener("click", startGame)
nextBtn.addEventListener("click",() => {
    currentQuestion++
    setNextQuestion()
})
function gameOver() {
    document.getElementById("Alert").innerHTML = "&#127881; Times Up! &#127881;"
  }

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
            { text: "function(myFunction())", correct: false},
         ]
    },
    {
        questions: "Which option is the correct way to round the number 4.75 in Javascript",
        answers: [
            { text: "round(4.75)", correct: false},
            { text: "Math.round(4.75)", correct: true},
            { text: "Math.Round = 4.75", correct: false},
            { text: "Math.round: 4.75", correct: false},
     ]
    },
    {
        questions: "You're trying to put a message in the browser's status bar, select the correct one.",
        answers: [
            { text: "window.status = 'message'", correct: true},
            { text: "window = 'message'", correct: false},
            { text: "window(status:'message'", correct: false},
            { text: "window.status(message)", correct: false},
     ]
    },
    {
        questions: "What values does a Boolean represent?",
        answers: [
            { text: "numbers", correct: false},
            { text: "messages", correct: false},
            { text: "yes/no ", correct: false},
            { text: "true/false", correct: true},
     ]
    },
    {
        questions: "Which statement below is true?",
        answers: [
            { text: "Code inside a function is not executed when fuction is invoked.", correct: false},
            { text: "The 'this' keyword refers to an object.", correct: true},
            { text: "Code inside a function is executed when fuction is defined.", correct: false},
            { text: "The 'this' keyword is a variable.", correct: false},
     ]
    },
    {
        questions: "Which statement is false.",
        answers: [
            { text: "Calls a function with a given 'this' value.", correct: false},
            { text: "You cannot use 'call()' to use funtions belonging to one object and call for a different object.", correct: true},
            { text: "Pass tence 'called()' also works in Javascript.", correct: false},
            { text: "This method can be used on different objects", correct: false},
     ]
    },
    {
        questions: "Select the correct way to display an alert.",
        answers: [
            { text: "alert = 'alert message';", correct: false},
            { text: "alert.'alert message'", correct: false},
            { text: "alert('alert message');", correct: true},
            { text: "alert: alert message;", correct: false},
     ]
    },
    {
        questions: "How do you properly access page element id?",
        answers: [
            { text: "HTML.getElementById(id)", correct: false},
            { text: "getElementById = (id)", correct: false},
            { text: "inner.text.getElementById(id)", correct: false},
            { text: "document.getElementById(id)", correct: true},
     ]
    },
    {
        questions: "Which object is written correctly?",
        answers: [
            { text: "const student = [Name: 'Celeste', Address: 'CA', age: 23];", correct: false},
            { text: "const dinner = { guests: 4, main: 'tacos', side: 'rice'}; ", correct: true},
            { text: "const cat: {name: 'Butters, age: 2, color: 'Orange'}", correct: false},
            { text: "const.coffee = {milk: 'oat', sugars: 3, roast: 'medium'};", correct: false},
     ]
    },
    {
        questions: "Which operator means subraction assignment?",
        answers: [
            { text: "+=", correct: false},
            { text: "*=", correct: false},
            { text: "-=", correct: true},
            { text: "<=", correct: false},
     ]
    },
]
const finalScore = document.getElementById("final-score");
const recentScore = localStorage.getItem("recentScore")
const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
 

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
finalScore.innerText = recentScore;

initials.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !initials.value;
});

finalScore.innerText = recentScore;
const score = {
    score: recentScore,
    name: initials.value
};
saveHighScore = e => {
    console.log('click save button');
    e.preventDefault();

    const score = {
        score: recentScore,
        name: initials.value 
    };
    highScore.push(score);
    console.log(highScore);

}

