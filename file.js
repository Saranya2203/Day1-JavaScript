// What will be the output of the following code snippet?

const num = 15;

if (num > 10) {
  console.log("Greater than 10");
  if (num > 20) {
    console.log("Also greater than 20");
  } else {
    console.log("But not greater than 20");
  }
} else {
  console.log("Not greater than 10");
}


// What will be the output of the following code snippet?

const day = "Saturday";
const isWeekend = true;

if (isWeekend) {
  console.log("It's a weekend!");
  if (day === "Saturday") {
    console.log("Enjoy your Saturday!");
  } else if (day === "Sunday") {
    console.log("Relax on Sunday!");
  } else {
    console.log("Some other weekend day.");
  }
} else {
  console.log("It's a weekday.");
}

// What will be the output of the following code snippet?

const num1 = 12;
const num2 = 8;
let result;

if (num1 > 10) {
  if (num2 > 5) {
    result = "Both conditions met!";
  } else {
    result = "Second condition not met!";
  }
} else {
  result = "First condition not met!";
}

console.log(result);

// What will be the output of the following code snippet?

const age = 17;
const hasLicense = false;
let canDrive;

if (age >= 18) {
  if (hasLicense) {
    canDrive = "You can drive!";
  } else {
    canDrive = "You need a license to drive.";
  }
} else {
  canDrive = "You are too young to drive.";
}

console.log(canDrive);



// What will be the output of the following code snippet?

const num = 55;

if (num > 50) {
  console.log("Greater than 50");
  if (num % 2 === 0) {
    console.log("And it's even.");
  } else {
    console.log("But it's odd.");
  }
} else {
  console.log("Not greater than 50");
}


// What will be the output of the following code snippet?

const marks = 85;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else {
  grade = "D";
}

console.log("Your grade is:", grade);

// What will be the output of the following code snippet?

const num = 7;

if (num < 10) {
  console.log("Less than 10");
  if (num % 2 === 0) {
    console.log("And it's even.");
  } else {
    console.log("But it's odd.");
  }
} else {
  console.log("Not less than 10");
}

// What will be the output of the following code snippet?

const hour = 13;
let greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else {
  if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
}

console.log(greeting);


// What will be the output of the following code snippet?

const a = 15;
const b = 20;

if (a > 10) {
  if (b > 15) {
    console.log("Both conditions met!");
  } else {
    console.log("Second condition not met!");
  }
} else {
  console.log("First condition not met!");
}

// What will be the output of the following code snippet?

const num = 8;

if (num < 5) {
  console.log("Less than 5");
} else if (num >= 5 && num < 10) {
  console.log("Between 5 and 9");
} else {
  console.log("10 or greater");
}*/

//Print the values
const values= ["saranya","mathu","vibe","arjun"]
function Push(par){
  for(let i=0; i < par.length; i++){
    console.log(par[i])
  }

}
Push(values)

//push the value without using push method
function add(par1,value1){
  par1[par1.length]=value1
}
add(values,"roghan")
console.log(values)

//pop the values without using pop method
