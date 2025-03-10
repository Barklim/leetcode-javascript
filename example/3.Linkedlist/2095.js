/**
 * 2095. Delete the Middle Node of a Linked List
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
 * Difficulty: Medium
 *
 * You are given the head of a linked list. Delete the middle node, and return the head
 * of the modified linked list.
 *
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using
 * 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
 *
 * For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {

};

const myLinkedList = new LinkedList();
let head = myLinkedList.head;
myLinkedList.prepend(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.append(7);

console.log('deleteNode');
console.log(myLinkedList.toArray().join(',')); 

console.log('deleteNode 4');
deleteMiddle(myLinkedList.head) // 123 4 567 // 123 567
console.log(myLinkedList.toArray().join(',')); 

console.log('deleteNode 35'); // 12 3 5 67 // 12 3 67
deleteMiddle(myLinkedList.head)
console.log(myLinkedList.toArray().join(','));

console.log('deleteNode 3'); // 12 3 67 // 12 67
deleteMiddle(myLinkedList.head)
console.log(myLinkedList.toArray().join(',')); 

// const myLinkedList = new MyLinkedList();
// let head = myLinkedList.head;
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(2);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtTail(4);
// myLinkedList.addAtTail(5);
// myLinkedList.addAtTail(6);
// myLinkedList.addAtTail(7);

// console.log('deleteNode');
// console.log(myLinkedList.toArray().join(',')); 

// console.log('deleteNode 4');
// deleteMiddle(head) // 123 4 567 // 123 567
// console.log(myLinkedList.toArray().join(',')); 

// console.log('deleteNode 35'); // 12 3 5 67 // 12 3 67
// deleteMiddle(head)
// console.log(myLinkedList.toArray().join(','));

// console.log('deleteNode 3'); // 12 3 67 // 12 67
// deleteMiddle(head)
// console.log(myLinkedList.toArray().join(',')); 



