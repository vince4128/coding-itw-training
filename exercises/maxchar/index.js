// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//solution1 vincent
/*function maxChar(str) {
    let chars = {};
    for (let char of str){
        chars[char] = chars[char] ++ || 1;
    }
    let max = null;
    Object.keys(chars).map(k => {
        if(!max){
            max = k;
        }else if(chars[k] > max){
            max = k;
        }
    });
    return max;
}*/

//solution 2 stephen
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str){  //for of is for array or string
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for(let char in charMap){ //for in is for object
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;