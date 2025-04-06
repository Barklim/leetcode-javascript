/**
 * 2705. Compact Object
 * https://leetcode.com/problems/compact-object/
 * Difficulty: Medium
 *
 * Given an object or array obj, return a compact object.
 *
 * A compact object is the same as the original object, except with keys containing falsy
 * values removed. This operation applies to the object and any nested objects. Arrays are
 * considered objects where the indices are keys. A value is considered falsy when
 * Boolean(value) returns false.
 *
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

};

ex1 = compactObject([null, 0, false, 1])
console.log(ex1) // [1]

ex2 = compactObject({"a": null, "b": [false, 1]})
console.log(ex2) // {"b": [1]}

ex3 = compactObject([null, 0, 5, [0], [false, 16]])
console.log(ex3) // [5, [], [16]]