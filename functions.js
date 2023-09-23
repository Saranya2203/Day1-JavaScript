//Display the text
function greet() {
  console.log("Hello there!");
}
greet();

//return type
const square = function (number) {
  return number * number;
};
const x = square(4);
console.log(x);

//Anonymous function
var greet = function () {
  console.log("Welcome to the world");
};

greet();

//Passing arguments in Anonymous function
var greet = function (platform) {
  console.log("Welcome to ", platform);
};

greet("GeeksforGeeks!");

//Arrow function
var greet = () => {
  console.log("My name is sara");
};

greet();
//Write a `switch` statement that takes the variable `dayOfWeek` and logs a message based on the day of the week. If it's a weekday (Monday to Friday), log "It's a workday." If it's the weekend (Saturday or Sunday), log "It's the weekend."

let dayOfWeek = "Saturday";
switch (dayOfWeek) {
  case (dayOfWeek = "Monday"):
    console.log("It's a work day");
    break;
  case (dayOfWeek = "Tuesday"):
    console.log("It's a work day");
    break;
  case (dayOfWeek = "Wednesday"):
    console.log("It's a work day");
    break;
  case (dayOfWeek = "Thursday"):
    console.log("It's a work day");
    break;
  case (dayOfWeek = "Friday"):
    console.log("It's a work day");
    break;
  case (dayOfWeek = "Saturday"):
    console.log("It's a week end");
    break;
  case (dayOfWeek = "Sunday"):
    console.log("It's a week end");
    break;
  default:
    console.log("Undefined");
}

const score = 85;
let letterGrade;
switch (true) {
  case score >= 90:
    letterGrade="A";
    break;
  case score >= 80:
    letterGrade="B";
    break;
  case score >= 70:
    letterGrade="C";
    break;
  case score >= 60:
    letterGrade="D";
    break;
  default:
    letterGrade="F";
}
console.log(`The letter grade is: ${letterGrade}`);

const fruits=["apple", "orange"]


