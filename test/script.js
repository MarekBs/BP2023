var questions;
var currentQuestionIndex = 0;
var score = 0;
var startButton = document.getElementById('start-button');
var questionContainer = document.getElementById('question-container');
var redo =document.getElementById('redoBtn');
redo.style.display = 'none';
startButton.addEventListener('click', startTest);
redo.addEventListener('click', function() {
    redo.style.display = 'none';
});

function startTest() {
  startButton.style.display = 'none';
  loadQuestions();
  currentQuestionIndex = 0; 
    score = 0; 
}

function loadQuestions() {
  fetch('otazky.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      questions = data;
      initializeTest();
    })
    .catch(function(error) {
      console.log('Chyba pri načítaní otázok: ' + error);
    });
}

function initializeTest() {
  shuffleQuestions();
  showQuestion();
}

function shuffleQuestions() {
  for (var i = questions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
}

function showQuestion() {
  var question = questions[currentQuestionIndex];
  var html = '<div class="question">' + question.question + '</div>';

  for (var i = 0; i < question.answers.length; i++) {
    html += '<div class="answer" onclick="checkAnswer(' + i + ')">' + question.answers[i] + '</div>';
  }

  questionContainer.innerHTML = html;
}

function checkAnswer(answerIndex) {
  var question = questions[currentQuestionIndex];
  var selectedAnswer = question.answers[answerIndex];
  var correctAnswer = question.correctAnswer;
  var answerElements = questionContainer.getElementsByClassName('answer');

  for (var i = 0; i < answerElements.length; i++) {
    answerElements[i].style.pointerEvents = 'none';

    if (i === correctAnswer) {
      answerElements[i].classList.add('correct');
    }

    if (i === answerIndex && i !== correctAnswer) {
      answerElements[i].classList.add('incorrect');
    }
  }

  if (answerIndex === correctAnswer) {
    score++;
  }

  setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < 5) {
    showQuestion();
  } else {
    finishTest();
  }
}

function finishTest() {
  var result = 'Váš výsledok: ' + score + ' z 5';
  questionContainer.innerHTML = result;
  redo.style.display = 'block';

}
