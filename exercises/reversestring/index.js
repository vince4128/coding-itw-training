// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution 1
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reverse

/*function reverse(str) {
    return str.split('').reverse().join('');
}*/

//solution 2
/*function reverse(str){
    let reversed = '';

    for (let character of str){
        reversed = character + reversed;
    }

    return reversed;
}*/

//solution 3
function reverse(str){
    return str.split('').reduce((rev, char) => {
        return char + rev;
    }, '');
}

module.exports = reverse;
