
// declaring a function that looks for even and odd numbers
function evenAndOddNumbers(arr) {
    let even = [];
    let odd = [];
  // starting the for loop and setting the array to find all numbers divisable by 2
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
  // if the number isnt even it runs the odd function
      } else {
        odd.push(arr[i]);
      }
    }
  
    console.log("Even numbers: ", even);
    console.log("Odd numbers: ", odd);
  }
  
  // Example usage:
  evenAndOddNumbers([2, 4, 7, 11, 15, 16]);
  // Output: Even numbers: [2, 4, 16] Odd numbers: [7, 11, 15]
  