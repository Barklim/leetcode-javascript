/**
 * 876. Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * Difficulty: Easy
 *
 * Given the head of a singly linked list, return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
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
var middleNode = function(head) {

};

const myLinkedList = new MyLinkedList();
let head = myLinkedList.head;
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtTail(3);

console.log('middleNode');
console.log(middleNode(head).val); // 1 2 3 // 2
myLinkedList.addAtTail(4);
console.log(middleNode(head).val); // 1 2 3 4 // 2
myLinkedList.addAtTail(5);
console.log(middleNode(head).val); // 12 3 45 // 3
myLinkedList.addAtTail(6);
console.log(middleNode(head).val); // 12 3 4 56 // 3
myLinkedList.addAtTail(7);
myLinkedList.addAtTail(8);
console.log(middleNode(head).val); // 123 4 5 678 // 4
myLinkedList.addAtTail(9);
console.log(middleNode(head).val); // 1234 5 6789 // 5


  