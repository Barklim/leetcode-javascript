/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list, remove the nth node from the end of the list
 * and return its head.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const result = new ListNode();
  let slow = result;
  let fast = result;
  slow.next = head;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return result.next;
};

// var removeNthFromEnd = function(head, n) {
//   const result = new LinkedListNode();
//   let slow = result;
//   let fast = result;
//   slow.next = head;

//   for (let i = 0; i <= n; i++) {
//     fast = fast.next;
//   }

//   while (fast) {
//     fast = fast.next;
//     slow = slow.next;
//   }

//   slow.next = slow.next.next;

//   return result.next;
// };


// var removeNthFromEnd = function(head, n) {
//   const dummy = new LinkedListNode();
//   dummy.next = head

//   first = dummy
//   second = dummy

//   for (let i = 0; i <= n; i++) {
//       first = first.next;
//   }

//   while (first) {
//       first = first.next;
//       second = second.next;
//   }

//   second.next = second.next.next;

//   return dummy.next;
// };
