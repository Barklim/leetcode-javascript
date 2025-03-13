/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(ascii + 32);
        } else {
            result += s.charAt(i);
        }
    }
    return result;
};

const example1 = lengthOfLastWord("Hello World"); // 5
const example2 = lengthOfLastWord("  fly me   to   the moon  "); // 4
const example3 = lengthOfLastWord("luffy is still joyboy"); // 6

console.log(example1);
console.log(example2);
console.log(example3);
