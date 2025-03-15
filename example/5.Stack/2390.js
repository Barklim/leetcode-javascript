/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const stack = [];

  for (const char of s) {
      char === '*' ? stack.pop(): stack.push(char)
  }

  return stack.join('');
};

const example1 = removeStars('leet**cod*e'); // 'lecoe'
const example2 = removeStars('erase*****'); // ''

console.log(example1);
console.log(example2);
