var question;
var answer;
var response;
var right = [];
var wrong = [];
var rightDisplay = document.getElementById('right');
var wrongDisplay = document.getElementById('wrong');

//serves as a mini database
var questions = [
  ['What color is water?', 'blue'],
  ['What color is blood?', 'red'],
  ['What color is dirt?', 'brown']
]


//grabs the button from the DOM
let button = document.querySelector('button')


//gives the button a cue to listen for, then fires a function
//function loops through the questions and answers
button.addEventListener("click", function () {
  for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0]
    answer = questions[i][1]
    response = prompt(question) //how to describe this?
    if (response === answer) {
      right.push(question)
    } else {
      wrong.push(question)
    }
  }
  rightDisplay.innerHTML = "Right: " + buildList(right)
  wrongDisplay.innerHTML = "Wrong: " + buildList(wrong)
})


//builds an HTML list based on the array that is passed into it
function buildList (array) {
var listHTML = '<ul>'
for (var i = 0; i < array.length; i += 1) {
  listHTML += '<li>' + array[i] + '</li>'
}
  listHTML + '</ul>'
  return listHTML
}
