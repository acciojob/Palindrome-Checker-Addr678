function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the clean string with its reversed version
  return cleanString === cleanString.split('').reverse().join('');
}

// Example case
console.log(isPalindrome("race a car")); // Output: false
