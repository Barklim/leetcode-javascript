/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

};

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8

console.log(kthLargest);

const kthLargest2 = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
kthLargest2.add(2); // return 7
kthLargest2.add(10); // return 7
kthLargest2.add(9); // return 7
kthLargest2.add(9); // return 8

console.log(kthLargest2);

