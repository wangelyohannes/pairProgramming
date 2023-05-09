function gcd_two_numbers(num1, num2) {
    let gcd = 1;  // initialize gcd to 1
    
    // Loop from 1 to the smaller of the two numbers
    for (let i = 1; i <= Math.min(num1, num2); i++) {
      
      // Check if i divides both numbers evenly
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;  // Update gcd to the current value of i
      }
    }
    
    return gcd;
  }
  console.log(gcd_two_numbers(336, 360));  // Output: 24
  console.log(gcd_two_numbers(78, 126));  // Output: 6
  