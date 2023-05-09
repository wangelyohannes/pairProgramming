// 
function findPrimes(numArray) {
    let primeArray = [];
  
    for (let i = 0; i < numArray.length; i++) {
      let isPrime = true;
  
      for (let j = 2; j < numArray[i]; j++) {
        if (numArray[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (numArray[i] > 1 && isPrime) {
        primeArray.push(numArray[i]);
      }
    }
  
    return primeArray;
  }
  
  // Example usage:
  console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  // Output: [2, 3, 5, 7]
  
  console.log(findPrimes([10, 18, 19, 29, 33, 35, 47, 66, 83]));
  // Output: [19, 29, 47, 83]