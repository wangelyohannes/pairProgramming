function brackets(str) {
    let stack = [];
  
    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // if the character is an opening bracket, push it to the stack
      if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
        stack.push(str[i]);
      }
      // if the character is a closing bracket, check if it matches the last opening bracket in the stack
      else if (str[i] === "}" || str[i] === "]" || str[i] === ")") {
        let lastBracket = stack.pop();
        if ((str[i] === "}" && lastBracket !== "{") ||
            (str[i] === "]" && lastBracket !== "[") ||
            (str[i] === ")" && lastBracket !== "(")) {
          return false;
        }
      }
    }
  
    // if the stack is not empty, there are unmatched opening brackets
    if (stack.length > 0) {
      return false;
    }
  
    // if all brackets match, return true
    return true;
  }
  
  // Example usage:
  console.log(brackets("{i did it}")); // Output: true
  console.log(brackets("{it didnt work]")); // Output: false

  