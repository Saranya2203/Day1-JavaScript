// For loop to print 1 to 10
for(let index=1; index<=10; index++){
    console.log(index)
}

//While loop to print 1 to 5
let i=1;
while(i<=5){
    console.log(i)
    i++
}
// Factorial of the n
let n = 5; 
  
function factorial(n) { 
    let ans = 1; 
      
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
  
console.log(factorial(n));

//Pattern program
var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}

//Sum
const number = 100;

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of all number from 1 to 100 is :', sum);

//print the 10x of table




//For loop to calculate the sum of all the prime numbers from 1 to 50
function sumOfPrimes(num)
    {
        let prime = new Array(num + 1);
        for(let i = 0; i < num + 1; i++)
            prime[i] = true;
       
           
       
        for (let p = 2; p * p <= num; p++)
        {
       
            if (prime[p] == true)
            {
                for (let i = p * 2; i <= num; i += p)
                    prime[i] = false;
            }
        }
        let sum = 0;
        for (let i = 2; i <= num; i++)
            if (prime[i])
                sum += i;
        return sum;
    }
    let num = 50;
      console.log(sumOfPrimes(num));






