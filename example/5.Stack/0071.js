/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

};

const example1 = isValid("/home/"); // "/home"
const example2 = isValid("/home//foo/"); // "/home/foo"
const example3 = isValid("/home/user/Documents/../Pictures"); // "/home/user/Pictures"
const example4 = isValid("/../"); // "/"
const example5 = isValid("/.../a/../b/c/../d/./"); // "/.../b/d"

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
