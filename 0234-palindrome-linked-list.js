/**
 * 234. Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
 * Difficulty: Easy
 *
 * Given the `head` of a singly linked list, return `true` if it is a palindrome.
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let a = '', b = '';

  while (head) {
    a = a + head.val;
    b = head.val + b;
    head = head.next;
  }

  return a === b;
};

// var isPalindrome = function(head) {
//   var middle = function(head) {
//       let slow = head;
//       let fast = head;
    
//       while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//       }
    
//       return slow;
//   }

//   var reverse = function(head) {
//       let prev = null;
//       let tail = head;
    
//       while (tail) {
//         const next = tail.next;
//         tail.next = prev;
//         prev = tail;
//         tail = next;
//       }
    
//       return prev;
//   }

//   mid = middle(head)
//   second = reverse(mid)
//   first = head

//   while (first && second) {
//       // !!! value, val
//       if (first.value !== second.value) {
//           return false
//       }
//       first = first.next
//       second = second.next
//   }

//   return true
// };