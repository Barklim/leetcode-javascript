/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    l = 1
    r = Math.max(...candies)
    result = 0

    while (l <= r) {
        mid = Math.floor((l+r)/2)
        childredCount = candies.reduce((sum, pile) => sum + Math.floor(pile/mid), 0)

        if (childredCount >= k) {
            result = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return result
};

const example1 = maximumCandies([5,8,6], 3); // 5
const example2 = maximumCandies([2,5], 11); // 0

console.log(example1);
console.log(example2);
