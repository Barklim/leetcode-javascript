/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

};

const myLinkedList = new LinkedList();
myLinkedList.prepend(1);
myLinkedList.append(2);
myLinkedList.append(4);

const myLinkedList2 = new LinkedList();
myLinkedList2.prepend(1);
myLinkedList2.append(3);
myLinkedList2.append(4);

const myLinkedList3 = new LinkedList();

const myLinkedList4 = new LinkedList();

const myLinkedList5 = new LinkedList();

const myLinkedList6 = new LinkedList();
myLinkedList6.prepend(0);

const executeList = (list, list2) => mergeTwoLists(list.head, list2.head)

const execute = (list, list2) => {
    console.log('travers')
    console.log(list.toString());
    console.log(list2.toString());
    const list1 = executeList(list, list2)
    console.log(traversList(list1))
}

execute(myLinkedList, myLinkedList2) // 1,2,4 1,3,4 // 1,1,2,3,4,4
execute(myLinkedList3, myLinkedList4) // [] [] // []
execute(myLinkedList5, myLinkedList6) // [] [0] // [0]

  