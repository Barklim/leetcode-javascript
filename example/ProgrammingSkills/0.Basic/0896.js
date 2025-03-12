/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {

};

const example1 = isMonotonic([1,2,2,3]); // true
const example2 = isMonotonic([6,5,4,4]); // true
const example3 = isMonotonic([1,3,2]); // false

console.log(example1);
console.log(example2);
console.log(example3);

var isMonotonic = function(nums) {
    let n = nums.length
    if (n === 1) return true

    let isInc = true
    let isDec = true

    for (let i = 1; i < n; i++) {
        if (!isInc && !isDec) {
            return false
        }

        if (nums[i - 1] > nums[i]) {
            isInc = false
        }

        if (nums[i - 1] < nums[i]) {
            isDec = false
        }
    }
    return isInc || isDec
};
