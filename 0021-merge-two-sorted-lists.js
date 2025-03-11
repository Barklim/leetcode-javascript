/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Difficulty: Easy
 *
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the
 * first two lists.
 */

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
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  if (l1.val > l2.val) {
    [l2, l1] = [l1, l2];
  }

  l1.next = mergeTwoLists(l1.next, l2);

  return l1;
};

// var mergeTwoLists = function(list1, list2) {
//   const dummy = new LinkedListNode();
//   current = dummy

//   p1 = list1
//   p2 = list2

//   while (p1 && p2) {
//       if (p1.val < p2.val) {
//           current.next = p1
//           p1 = p1.next
//       } else {
//           current.next = p2
//           p2 = p2.next
//       }

//       current = current.next
//   }

//   if (p1) {
//       current.next = p1
//   } else {
//       current.next = p2
//   }

//   return dummy.next
// };