/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

};

const myLinkedList = new LinkedList();
myLinkedList.prepend(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);

const myLinkedList2 = new LinkedList();
myLinkedList2.prepend(1);
myLinkedList2.append(2);
myLinkedList2.append(3);
myLinkedList2.append(4);
myLinkedList2.append(5);

const myLinkedList3 = new LinkedList();
myLinkedList3.prepend(2);
myLinkedList3.append(4);
myLinkedList3.append(6);
myLinkedList3.append(8);

const myLinkedList4 = new LinkedList();
myLinkedList4.prepend(2);
myLinkedList4.append(4);
myLinkedList4.append(6);
myLinkedList4.append(8);
myLinkedList4.append(10);


const executeList = list => reorderList(list.head)

const execute = list => {
    console.log('travers')
    console.log(list.toString());
    const list1 = executeList(list)
    console.log(traversList(list1))
}

execute(myLinkedList) // [1,2,3,4] // [1,4,2,3]
execute(myLinkedList2) // [1,2,3,4,5] // [1,5,2,4,3]
execute(myLinkedList3) // [2,4,6,8] // [2,8,4,6]
execute(myLinkedList4) // [2,4,6,8,10] // [2,10,4,8,6]
