/**
 * @param {string[]} strs
 * @returns {string}
 */
var encode = function (strs) {};

/**
 * @param {string} str
 * @returns {string[]}
 */
var decode = function (str) {};

const example1 = encode(["neet", "code", "love", "you"]); // 4#neet4#code4#love3#you
const example2 = decode(example1); // ["neet","code","love","you"]
const example3 = encode(["we", "say", ":", "yes"]); // 2#we3#say1#:3#yes
const example4 = decode(example3); // ["we","say",":","yes"]
const example5 = encode(["ne#et", "co#de", "lo#ve", "you"]); // 5#ne#et5#co#de5#lo#ve3#you
const example6 = decode(example1); // ["ne#et", "co#de", "lo#ve", "you"]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);

// var encode = function (strs) {
//   let res = "";
//   for (let s of strs) {
//     res += s.length + "#" + s;
//   }
//   return res;
// };

// var decode = function (str) {
//   let res = [];
//   let i = 0;
//   while (i < str.length) {
//     let j = i;
//     while (str[j] !== "#") {
//       j++;
//     }
//     let length = parseInt(str.substring(i, j));
//     i = j + 1;
//     j = i + length;
//     res.push(str.substring(i, j));
//     i = j;
//   }
//   return res;
// };
