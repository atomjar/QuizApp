var questions = [
  ['What color is water?', 'blue'],
  ['What color is blood?', 'red'],
  ['What color is dirt?', 'brown']
]

var right = []
var wrong = []

var rightDisplay = document.getElementById("right")
var wrongDisplay = document.getElementById("wrong")

var button = document.querySelector("button")

button.addEventListener("click", function() {
  //loop through every question
  for (var i = 0; i < questions.length; i += 1) {
    //create variables for question and answer
    var question = questions[i][0]
    var answer = questions[i][1]

    //create variable for user's answer
    var userAnswer = prompt(question)

    //check to see if user answer matches actual answer
    if (userAnswer === answer) {
      right.push(question)
    } else {
      wrong.push(question)
    }
  }
  //display list of right and wrongly answered questions
  rightDisplay.innerHTML = "Right:" + buildList(right)
  wrongDisplay.innerHTML = "Wrong:" + buildList(wrong)
})

//function that builds an HTML list based on content of an array
function buildList (array) {
  var listHTML = "<ul>"
  for (var i = 0; i < array.length; i += 1) {
    listHTML +=   "<li>" + array[i] + "</li>"
  }
  listHTML += "</ul>"
  return listHTML
}
