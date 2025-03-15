var RecentCounter = function() {
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
};

var obj = new RecentCounter()
var param_1 = obj.ping(1)

console.log(param_1); // 1
console.log(obj.ping(3001)); // 2
console.log(obj.ping()); // 3

function callPingMultipleTimes(obj, times, start = 1, step = 1) {
    let results = [];
    let t = start;

    for (let i = 0; i < times; i++) {
        results.push(obj.ping(t));
        t += step;
    }

    return results;
}

var obj = new RecentCounter();
console.log(callPingMultipleTimes(obj, 500, 1, 1000));
