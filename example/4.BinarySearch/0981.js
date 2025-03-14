var TimeMap = function() {
    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]


const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"

// var TimeMap = function() {
//     this.keyStore = new Map();
// };

// /** 
//  * @param {string} key 
//  * @param {string} value 
//  * @param {number} timestamp
//  * @return {void}
//  */
// TimeMap.prototype.set = function(key, value, timestamp) {
//     if (!this.keyStore.has(key)) {
//         this.keyStore.set(key, []);
//     }
//     this.keyStore.get(key).push([timestamp, value]);
// };

// /** 
//  * @param {string} key 
//  * @param {number} timestamp
//  * @return {string}
//  */
// TimeMap.prototype.get = function(key, timestamp) {
//     const values = this.keyStore.get(key) || [];
//     let left = 0;
//     let right = values.length - 1;
//     let result = '';

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (values[mid][0] <= timestamp) {
//             result = values[mid][1];
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return result;
// };
