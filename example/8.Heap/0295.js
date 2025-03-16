
var MedianFinder = function() {
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
};

const medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

const medianFinder2 = new MedianFinder();
medianFinder2.addNum(1);    // arr = [1]
medianFinder2.findMedian(); // return 1.0
medianFinder2.addNum(3);    // arr = [1, 3]
medianFinder2.findMedian(); // return 2.0
medianFinder2.addNum(2);    // arr[1, 2, 3]
medianFinder2.findMedian(); // return 2.0
