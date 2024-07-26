/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
//done

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  if(str1.length != str2.length)
      return false;


  //split - splits for array then sort and join to form string
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 == sortedStr2;
}

module.exports = isAnagram;
