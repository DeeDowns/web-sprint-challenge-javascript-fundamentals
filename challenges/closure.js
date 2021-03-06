// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/* With closure the nestedFunction can reach out to a higher scope (myFunction) and access the data (the internal variable)
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let count = []
  for(let i = 0; i <= num; i++){
    count.push(i)
  }
  const newCount = count.reduce(function(acc, item){
    return acc + item
    }, 0);
  
    return newCount
}
console.log(summation(4));
console.log(summation(6));






