/**
 * 844. Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare/
 * Difficulty: Easy
 *
 * Given two strings `s` and `t`, return true if they are equal when both
 * are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  return handleBackspaces(s) === handleBackspaces(t);
};

function handleBackspaces(input) {
  return input.split('').reduce((result, char) => {
    if (char === '#') {
      result.pop();
    } else {
      result.push(char);
    }
    return result;
  }, []).join('');
}

// (сзади идем)
// O(n+m) O(1)
// var backspaceCompare = function(s, t) {
//   n = s.length - 1
//   m = t.length - 1
//   skip_s = 0;
//   skip_t = 0;

//   while (n >= 0 && m>= 0) {
//       // todo: implement skip (if # or skip_counter > 0)

//       if (s[n] != s[m]) {
//           return false
//       }

//       n = n - 1
//       m = m - 1
//   }

//   return n === m
// };

// XXX:GPT
// var backspaceCompare = function(s, t) {
//   let n = s.length - 1;
//   let m = t.length - 1;
//   let skip_s = 0;
//   let skip_t = 0;

//   while (n >= 0 || m >= 0) {
//       while (n >= 0) { // Обрабатываем backspace в `s`
//           if (s[n] === '#') {
//               skip_s++;
//               n--;
//           } else if (skip_s > 0) {
//               skip_s--;
//               n--;
//           } else {
//               break;
//           }
//       }

//       while (m >= 0) { // Обрабатываем backspace в `t`
//           if (t[m] === '#') {
//               skip_t++;
//               m--;
//           } else if (skip_t > 0) {
//               skip_t--;
//               m--;
//           } else {
//               break;
//           }
//       }

//       if (n >= 0 && m >= 0 && s[n] !== t[m]) {
//           return false;
//       }

//       if ((n >= 0) !== (m >= 0)) {
//           return false;
//       }

//       n--;
//       m--;
//   }

//   return true;
// };