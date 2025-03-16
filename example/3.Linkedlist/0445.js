/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

};

const myLinkedList = new LinkedList();
myLinkedList.prepend(7);
myLinkedList.append(2);
myLinkedList.append(4);
myLinkedList.append(3);

const myLinkedList2 = new LinkedList();
myLinkedList2.prepend(5);
myLinkedList2.append(6);
myLinkedList2.append(4);

const myLinkedList3 = new LinkedList();
myLinkedList3.prepend(0);

const myLinkedList4 = new LinkedList();
myLinkedList4.prepend(0);

const myLinkedList5 = new LinkedList();
myLinkedList5.prepend(1);
myLinkedList5.append(2);
myLinkedList5.append(3);

const myLinkedList6 = new LinkedList();
myLinkedList6.prepend(4);
myLinkedList6.append(5);
myLinkedList6.append(6);

const executeList = (l1, l2) => addTwoNumbers(l1.head, l2.head)

const execute = (l1, l2) => {
    console.log('travers')
    console.log(l1.toString());
    console.log(l2.toString());
    const list1 = executeList(l1, l2)
    console.log(traversList(list1))
}

execute(myLinkedList, myLinkedList2) // [7,2,4,3] [5,6,4] // [7,8,0,7]
execute(myLinkedList3, myLinkedList4) // [0] [0] // [0] ???
execute(myLinkedList5, myLinkedList6) // [1,2,3] [4,5,6] // [5,7,9]