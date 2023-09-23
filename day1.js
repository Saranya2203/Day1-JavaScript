//if else
const carname="Benz";
if(carname==="Benz"){
    console.log("The name of the car is Benz");
}else{
    console.log("Undefined");
}

//else if
let a=5;
let b=6;
if(a>b){
    console.log("a is greater than b")
}else if(a<b){
    console.log("a is lesser than b")
}else{
    console.log("Both are equal")
}

//Switch
let color="White"
switch(color){
    case "Red":
        console.log("The color is red");
        break;
    case "Orange":
        console.log("The color is orange");
        break;
    case "White":
        console.log("The color is white");
        break;
    default:
        console.log("undefined")
}

let day;
switch(new Date().getDay()){
    case 0:
        day="Sunday";
        console.log("Weekend");
        break;
    case 1:
        day="Monday"
        console.log("Weekday");
        break;
    case 2:
        day="Tuesday";
        console.log("Weekday");
        break;
    case 3:
        day="Wednesday";
        console.log("Weekday");
        break;
    case 4:
        day="Thursday";
        console.log("Weekday");
        break;
    case 5:
        day="Friday";
        console.log("Weekday");
        break;
    case 6:
        day="Saturday";
        console.log("Weekend");
        break;
}

//Type conversion
let result;
result='4'-'2';
console.log(result);
result='4'-2;
console.log(result);
let x="5";
let y=++x;
console.log(y);
console.log(String(true));
console.log((43).toString());
console.log(Number(true));

function myfunct{
    
}