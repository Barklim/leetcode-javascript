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
var reverseList = function(head) {

};

const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);

console.log('reverseList');
console.log(myLinkedList.toString());
console.log('reverseList reversed');
const list = reverseList(myLinkedList.head)
console.log(list.value);
console.log(list.next.value);
console.log(list.next.next.value);
console.log(list.next.next.next.value);