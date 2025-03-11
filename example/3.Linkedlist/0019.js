/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

};

const myLinkedList = new LinkedList();
myLinkedList.prepend(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

const myLinkedList2 = new LinkedList();
myLinkedList2.prepend(1);

const myLinkedList3 = new LinkedList();
myLinkedList3.prepend(1);
myLinkedList3.append(2);

const myLinkedList4 = new LinkedList();
myLinkedList4.prepend(1);
myLinkedList4.append(2);
myLinkedList4.append(3);
myLinkedList4.append(4);
myLinkedList4.append(5);
myLinkedList4.append(6);
myLinkedList4.append(7);

const executeList = (list, n) => removeNthFromEnd(list.head, n)

const execute = (list, n) => {
    console.log('travers')
    console.log(list.toString());
    const list1 = executeList(list, n)
    console.log(traversList(list1))
}

execute(myLinkedList, 2) // 1,2,3,4,5 // 1,2,3,5
execute(myLinkedList2, 1) // 1 // []
execute(myLinkedList3, 1) // 1,2 // 1
execute(myLinkedList4, 4) // 1,2,3,4,5,6,7 // 1,2,3,5,6,7
execute(myLinkedList4, 2) // 1,2,3,5,6,7 // 1,2,3,5,7

  