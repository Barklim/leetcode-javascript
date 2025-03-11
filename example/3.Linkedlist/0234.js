/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

};

const myLinkedList = new LinkedList();
myLinkedList.prepend(1);
myLinkedList.append(2);
myLinkedList.append(2);
myLinkedList.append(1);

const myLinkedList2 = new LinkedList();
myLinkedList2.prepend(1);
myLinkedList2.append(2);

const myLinkedList3 = new LinkedList();
myLinkedList3.prepend(1);
myLinkedList3.append(2);
myLinkedList3.append(4);
myLinkedList3.append(2);
myLinkedList3.append(1);

const myLinkedList4 = new LinkedList();
myLinkedList4.prepend(1);
myLinkedList4.append(2);
myLinkedList4.append(4);
myLinkedList4.append(4);
myLinkedList4.append(2);
myLinkedList4.append(1);

const myLinkedList5 = new LinkedList();
myLinkedList5.prepend(1);
myLinkedList5.append(2);
myLinkedList5.append(4);
myLinkedList5.append(5);
myLinkedList5.append(2);
myLinkedList5.append(1);

const executeList = list => isPalindrome(list.head)

const execute = list => {
    console.log(list.toString());
    console.log(executeList(list));
}

console.log('middleNode');

execute(myLinkedList) // 1 2 2 1 // true
execute(myLinkedList2) // 1 2 // false
execute(myLinkedList3) // 1 2 4 2 1 // true
execute(myLinkedList4) // 1 2 4 4 2 1 // true
execute(myLinkedList5) // 1 2 4 5 2 1 // false