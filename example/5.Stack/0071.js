/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

};

const example1 = simplifyPath("/home/"); // "/home"
const example2 = simplifyPath("/home//foo/"); // "/home/foo"
const example3 = simplifyPath("/home/user/Documents/../Pictures"); // "/home/user/Pictures"
const example4 = simplifyPath("/../"); // "/"
const example5 = simplifyPath("/.../a/../b/c/../d/./"); // "/.../b/d"

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
