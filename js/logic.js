//quiz state variables
var currentQuestionIndex = 0;
var time = questions.length *15;
var timerID;

//DOM variable elements
var questionsEl = document.getElementById("questions");
var timerEl = documents.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn =document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//correct incorrect sounds
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx.incorrect.wav");

function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    timerID = setInterval(clockTick, 100);

    timerEl.textContent = time;

    getQuestion();
    
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(funciton(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 +". " + choice; 

        choiceNode.onClick = questionClick;

        choicesEl.appendchild(choiceNode);
    })
}