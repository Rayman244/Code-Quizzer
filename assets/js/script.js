var highscores = document.getElementById("highscoresTxt");
var timerTxt = document.getElementById("timerTxt");

class Question {
  constructor(question,answer, a1, a2, a3, a4) {
    this.question = question;
    this.answer = answer;
    this.qs = [a1, a2, a3, a4];
  }
}
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
   '.innerHTML',
   '.text',
   '.style',
   '.body',
   '.innerHTML',
);
const q3 = new Question('Which method returns the length of the string?',
 '.length()',
 '.size(',
 '.index()',
 '.length()',
 'None of the above');

const q4 = new Question("Whats the method that converts string to uppercase?",
'.toUpperCase()',
'.toUpperCase()',
'.toString()',
'.toLowercase()');

const q5 = new Question('How would you add a element to the end of an array?',
".push()",
'.join()',
".pop()",
".push()",
".pull()"
)

const questions = [q1, q2,q3,q4,q5];
console.log(questions);
