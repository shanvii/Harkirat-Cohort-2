/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  if(str.length == 1)
    return true;
  
  let i = 0, j = str.length;

  for(; i < str.length/2; i++, j--) {

    if(str[i] == " " || str[i] == "," || str[i] == "!" || str[i] == "?")
      i++;
    if(str[j] == " " || str[j] == "," || str[j] == "!" || str[j] == "?")
      j++;

    if(str[i] != str[j])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
