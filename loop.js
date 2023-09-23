//For loop
for(let index=0; index<5; index++){
    console.log(index)
}

//While loop
let i=1;
while(i<=5){
    console.log(i)
    i++
}


//Do while
do{
    console.log(i);
    i++
}while(i<5);


//for..in
//it iterates only in object not occur in array
let person={
    name:"saranya",
    last:"devi",
    age:22,
    job:"developer"
}
for(const key in person){
    console.log(key +':'+person[key])
}

//for..of
//iterates object like array, string

const veggie=["cucumber","apple","orange"]
for(const iterator of veggie){
    console.log(iterator)
}

//for..each
//iterates only on array not occurs in object
veggie.forEach(element => {
    console.log(element);
});

//map
const numbers=[2,4,6,8]
let a=numbers.map(num => num*2)
console.log(a)

let b=veggie.map(veg => veg)
console.log(b)