// Query Selectors
// header
var highscoresTxt = document.getElementById("highscoresTxt");
var timerTxt = document.getElementById("timerTxt");
// intro container
var introContainer = document.getElementById("introContainer");
var startBtn = document.getElementById("takeTestBtn");
// quiz container
var quizContainer = document.getElementById("quiz");
var questionTxt = document.getElementById("questionTxt");
var ans1 = document.getElementById("a1");
var ans2 = document.getElementById("a2");
var ans3 = document.getElementById("a3");
var ans4 = document.getElementById("a4");

// Highscore Container
var highScoreUl = document.getElementById('highScoreList')
var highScoreContainer = document.getElementById('highscoresContainer')
var lastScoreTxt = document.getElementById("last-score")

// End Container
var endContainer = document.getElementById('endContainer')
var scoreTxt = document.getElementById('scoreTxt')
var intlsTxtField = document.getElementById('initialsTxtField')
var subBtn = document.getElementById('submitBtn')

// Question Class
class Question {
  constructor(question, answer, a1, a2, a3, a4) {
    this.question = question;
    this.answer = answer;
    this.qs = [a1, a2, a3, a4];
  }
}
// Questions
const q1 = new Question(
  "Inside which HTML element do we put the JavaScript?",
  "<script>",
  "<body>",
  "<script>",
  "<head>",
  "<footer>"
);
const q2 = new Question(
  "How to change the text of an HTML element",
  ".innerHTML",
  ".text",
  ".style",
  ".body",
  ".innerHTML"
);
const q3 = new Question(
  "Which method returns the length of the string?",
  ".length()",
  ".size(",
  ".index()",
  ".length()",
  "None of the above"
);

const q4 = new Question(
  "Whats the method that converts string to uppercase?",
  ".toUpperCase()",
  ".toUpperCase()",
  ".toString()",
  ".toLowercase()",

);

const q5 = new Question(
  "How would you add a element to the end of an array?",
  ".push()",
  ".join()",
  ".pop()",
  ".push()",
  ".pull()"
);





// Variables
const questions = [q1, q2, q3, q4, q5];
let score = 0
let lastScore
const highScores = []
let index = 0;
var time = 60;
let timer;
const hState = highScoreContainer.getAttribute('data-active')
const qState = quizContainer.getAttribute('data-active')
// Highscores
  // Create Highscore
function addHiScore(intls,scr){
  
    var hs = {
      initials: intls,
      score: scr
    }
    highScores.push(hs)
    // if(highScores.length=0){
    //    for(i=0; i < highScores.length - 1; i++){
    //     if(score > highScores[i].score){
    //     highScores[i] = hs
    //     console.log(highScores);
    //       }
    //     }
    //   }else{
        
       
    //   } 
    
    // scoreChecker(scr)
   
}
function scoreChecker(score){
   for(i=0; i < highScores.length - 1; i ++){
    if(score > highScores[i].score){
      highScores[i] = hs
      console.log(highScores);
    }
  }
}
function toggleHS(){
  if(highscoresTxt.textContent != 'Go Back'){
    loadHS()
    highScoreContainer.style.display = 'block'
    introContainer.style.display = "none";
    quizContainer.style.display = "none"; 
    highScoreContainer.setAttribute('data-active','true')
    
    highscoresTxt.textContent = 'Go Back'
  }else{
    reset()
  
  }
  
}

function loadHS(){  
  if(highScoreUl.childNodes.length == 0){
   addHiScore('RH', 40)
   addHiScore('RH', 50)
   addHiScore('RH', 50)
   addHiScore('RH', 30)
   addHiScore('RH', 10)
  for(i=0;i<=highScores.length - 1;i++){
     var li = document.createElement('li')
    highScoreUl.appendChild(li)
    li.textContent = `${highScores[i].initials} ${highScores[i].score}`
    }
  }

}

// timer
function startTimer() {
   timer = setInterval(function () {
    timerTxt.textContent = `${time}`;
    time--;
    if (time == -2) {
      clearInterval(timer);
      alert(`You have exceeded the given time. \n Please try again!`);
      reset()
    }
  }, 1000);
}

// navigate questions
function loadQuestions(index){
  if(index < questions.length){
  var q = questions[index]
    questionTxt.textContent = q.question
    ans1.textContent = q.qs[0]
    ans2.textContent = q.qs[1]
    ans3.textContent = q.qs[2]
    ans4.textContent = q.qs[3]
  }else{
    toggleHS()
    lastScoreTxt.textContent = lastScore
    index = 0
    clearInterval(timer)
  }
  

}


function selAnsw(e){
  var element = e.target
  if(element.textContent == questions[index].answer){
    score = score + 10
   lastScore = score
   console.log(score);
  }
  index = index + 1
  loadQuestions(index)
  

}

// Finished Quiz
function showFinished(){
  endContainer.style.display = 'block'
  introContainer.style.display = 'none'
  quizContainer.style.display = "none";
  highScoreContainer.style.display = "none"

}

// reset
function reset(){
  timerTxt.textContent = "60";
  introContainer.style.display = "block";
  quizContainer.style.display = "none";
  highScoreContainer.style.display = "none"
  highscoresTxt.textContent = 'View Highscores'
}
// Start Quiz
function start() {
  introContainer.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestions(0)
  startTimer();
}

startBtn.addEventListener("click", start);
quizContainer.addEventListener('click',selAnsw)
highscoresTxt.addEventListener('click',toggleHS)