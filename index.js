
function iThink (str) {
  return (str + "...I think");
}

function iLearned (str) {
  return ("Today I learned " + str);
}

function checkout (int) {
  return ((int * 0.095) + int);
}

function roll (int) {
  return Math.round(Math.random() * (int-1) + 1);
}

function fizzBuzz (int) {
  if ((int%3===0)&&(int%5===0)) {return "FizzBuzz";}
  if (int%3===0) {return "Fizz";}
  if (int%5===0) {return "Buzz";}
  else {return int;}
}

function skeeRater (score) {
  if (score < 150) {return "You are awful at this";}
  if (score >= 150 && score < 250) {return "Eh";}
  if (score >= 250 && score < 350) {return "Aight you're getting there";}
  if (score >= 350 && score < 450) {return "I admit it, you're pretty good";}
  if (score >= 450) {return "Damn son just quit you won";}
  else {return "You need to have a numerical score";}
};


var student = ["Liam", "Yulissa", "Ricardo", "Nicki", "Monsur"];

function printFirst (name){
  console.log(name[0]);
}
student[1] = "Jewel";
student[5] = "Joe";
printFirst(student);

var studentID = [1, 8, 30, 23, 7, 11];

function firstHalf (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 15) {array.splice(i,1); i--}
    else {}
  }
  console.log(array);
}
firstHalf(studentID);

var deli = [];

function linePosition (line, name) {
  return line.length + 1;
}

function nowServing (line) {
  if (line.length === 0) {return "There is nobody waiting to be served";}
  else {console.log(line[0]); line.splice(0,1);}
}

function peopleInLine (line) {
  for (var i = 0; i < line.length; i++) {
    console.log((i + 1) + "." + line[i]);
  }
}
