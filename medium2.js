function isAnagram(str1, str2) {
    // Remove whitespace and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    
    // Check if the sorted versions of the strings are equal
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  // Example usage:
  console.log(isAnagram('So dark the con of man', 'Madonna of the Rocks')); // Output: true
  console.log(isAnagram('Things are good', 'Dogs eat ants')); // Output: false
  