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
myLinkedList.prepend(2);
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
myLinkedList5.prepend(9);
myLinkedList5.append(9);
myLinkedList5.append(9);
myLinkedList5.append(9);
myLinkedList5.append(9);
myLinkedList5.append(9);
myLinkedList5.append(9);

const myLinkedList6 = new LinkedList();
myLinkedList6.prepend(9);
myLinkedList6.append(9);
myLinkedList6.append(9);
myLinkedList6.append(9);

const myLinkedList7 = new LinkedList();
myLinkedList7.prepend(1);
myLinkedList7.append(2);
myLinkedList7.append(3);

const myLinkedList8 = new LinkedList();
myLinkedList8.prepend(4);
myLinkedList8.append(5);
myLinkedList8.append(6);

const myLinkedList9 = new LinkedList();
myLinkedList3.prepend(9);

const myLinkedList10 = new LinkedList();
myLinkedList4.prepend(9);


const executeList = (l1, l2) => addTwoNumbers(l1.head, l2.head)

const execute = (l1, l2) => {
    console.log('travers')
    console.log(l1.toString());
    console.log(l2.toString());
    const list1 = executeList(l1, l2)
    console.log(traversList(list1))
}

execute(myLinkedList, myLinkedList2) // [2,4,3] [5,6,4] // [7,0,8]
execute(myLinkedList3, myLinkedList4) // [0] [0] // [0] ???
execute(myLinkedList5, myLinkedList6) // [9,9,9,9,9,9,9] [9,9,9,9] // [8,9,9,9,0,0,0,1]
execute(myLinkedList7, myLinkedList8) // [1,2,3] [4,5,6] // [5,7,9]
execute(myLinkedList9, myLinkedList10) // [9] [9] // [8,1]
