function vowelChecker(x) {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      console.log("This is a vowel");
    } else {
      console.log("This is not a vowel");
    }
  }
vowelChecker('b'); // Output: This is not a vowel
vowelChecker('a'); // Output: This is a vowel
