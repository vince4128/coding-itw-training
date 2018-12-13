// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//solution vincent
/*function palindrome(str) {
   const reverse = str.split('').reduce((rev, char) => {
        return char + rev;
    }, '');
    return str === reverse;
}*/

//solution 2 stephen
/*function palindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}*/

//solution 3 stephen
function palindrome(str){
    //first parameter of every is the value and second is the index
    return str.split('').every((char, i) => {
        return char === str[str.length - i -1 ]; //minus one to deal with the 0 base
    });
}

module.exports = palindrome;
