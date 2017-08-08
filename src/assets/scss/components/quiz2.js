
//How Dave did it

var questions = [
['Where do I live?', 'Spartanburg'],
['What is my name?', 'Michelle'],
['How old is my house?', '97 years old']
];

var correctAnswers = 0;

var question;
var answer;
var response;
var html;


for (var i=0; i<quiz.length; i+=1){
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));

  if (response === answer {
    correctAnswers +=1;
  }
}
html = 'You got ' + correctAnswers + ' out of 3 correct.'
print(html);
