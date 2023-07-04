// complete the given function

function palindrome(str){
 // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the reversed string is equal to the original string
  return s === s.split('').reverse().join('');
}
module.exports = palindrome
