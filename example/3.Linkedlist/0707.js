
var MyLinkedList = function() {
    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
  

// var obj = new MyLinkedList()
// var param_1 = obj.get(index)
// obj.addAtHead(val)
// obj.addAtTail(val)
// obj.addAtIndex(index,val)
// obj.deleteAtIndex(index)

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3

console.log(myLinkedList);
console.log(myLinkedList.get(1)); // 3
console.log(myLinkedList.get(2)); // -1
console.log(myLinkedList.get(3)); // -1


// class Node {
//     constructor(val = null, prev = null, next = null) {
//         this.val = val
//         this.prev = prev
//         this.next = next
//     }
// }

// var MyLinkedList = function() {    
//     this.head = new Node()
//     this.tail = new Node()
//     this.length = 0
//     this.head.next = this.tail
//     this.tail.prev = this.head 
// };

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(idx) {
//     if (idx < 0 || idx >= this.length) return -1

//     let curNode = this.head.next

//     while (idx--) curNode = curNode.next

//     return curNode.val
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//     let prev = this.head
//     let next = this.head.next

//     let node = new Node(val, prev, next)

//     prev.next = node
//     next.prev = node

//     this.length++
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//     let prev = this.tail.prev
//     let next = this.tail

//     let node = new Node(val, prev, next)

//     prev.next = node
//     next.prev = node

//     this.length++
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(idx, val) {
//     if (idx < 0 || idx > this.length) return null

//     if (idx === this.length) {
//         this.addAtTail(val)
//         return
//     }

//     let prev = this.head

//     while (idx--) prev = prev.next

//     let next = prev.next

//     let node = new Node(val, prev, next)

//     prev.next = node
//     next.prev = node

//     this.length++
// };

// /** 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(idx) {
//     if (idx < 0 || idx >= this.length) return null

//     let prev = this.head

//     while (idx--) prev = prev.next

//     let next = prev.next.next

//     prev.next = next
//     next.prev = prev

//     this.length--
// };

