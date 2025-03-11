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
var deleteDuplicates = function(head) {

};

const myLinkedList = new LinkedList();
myLinkedList.prepend(1);
myLinkedList.append(1);
myLinkedList.append(2);

const myLinkedList2 = new LinkedList();
myLinkedList2.prepend(1);
myLinkedList2.append(1);
myLinkedList2.append(2);
myLinkedList2.append(3);
myLinkedList2.append(3);

const myLinkedList3 = new LinkedList();
myLinkedList3.prepend(1);
myLinkedList3.append(2);
myLinkedList3.append(4);
myLinkedList3.append(4);
myLinkedList3.append(4);

const myLinkedList4 = new LinkedList();
myLinkedList4.prepend(1);
myLinkedList4.append(2);
myLinkedList4.append(4);
myLinkedList4.append(4);
myLinkedList4.append(5);
myLinkedList4.append(6);

const myLinkedList5 = new LinkedList();
myLinkedList5.prepend(1);
myLinkedList5.append(2);

const executeList = list => deleteDuplicates(list.head)

const execute = list => {
    console.log('travers')
    console.log(list.toString());
    const list1 = executeList(list)
    console.log(traversList(list1))
}

execute(myLinkedList) // 1 1 2 // 1 2
execute(myLinkedList2) // 1 1 2 3 3 // 1 2 3
execute(myLinkedList3) // 1 2 4 4 4 // 1 2 4
execute(myLinkedList4) // 1 2 4 4 5 6 // 1 2 4 5 6
execute(myLinkedList5) // 1 2 // 1 2

  