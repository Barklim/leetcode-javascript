/**
 * 2666. Allow One Function Call
 * https://leetcode.com/problems/allow-one-function-call/
 * Difficulty: Easy
 *
 * Given a function fn, return a new function that is identical to the original function except
 * that it ensures fn is called at most once.
 *
 * - The first time the returned function is called, it should return the same result as fn.
 * - Every subsequent time it is called, it should return undefined.
 */
var once = function(fn) {
    
    return function(...args){
        
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

ex1 = onceFn(1,2,3); // 6
ex2 = onceFn(2,3,6); // returns undefined without calling fn

console.log(ex1)
console.log(ex2)

