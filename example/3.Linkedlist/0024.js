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
var swapPairs = function(head) {

};

const myLinkedList = new LinkedList();
myLinkedList.prepend(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);

const myLinkedList2 = new LinkedList();

const myLinkedList3 = new LinkedList();
myLinkedList3.prepend(1);

const myLinkedList4 = new LinkedList();
myLinkedList4.prepend(1);
myLinkedList4.append(2);
myLinkedList4.append(3);

const myLinkedList5 = new LinkedList();
myLinkedList5.prepend(1);
myLinkedList5.append(2);
myLinkedList5.append(3);
myLinkedList5.append(4);
myLinkedList5.append(5);
myLinkedList5.append(6);

const executeList = (list, n) => swapPairs(list.head)

const execute = list => {
    console.log('travers')
    console.log(list.toString());
    const list1 = executeList(list)
    console.log(traversList(list1))
}

execute(myLinkedList) // 1,2,3,4, // 1,2,3,5
execute(myLinkedList2) // [] // []
execute(myLinkedList3) // [1] // [1]
execute(myLinkedList4) // 1,2,3 // 2,1,3
execute(myLinkedList5) // 1,2,3,4,5,6 // 2,1,4,3,6,5

  