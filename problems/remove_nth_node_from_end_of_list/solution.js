/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let root = head;
  let clone = head;
  let len = 0;
 
  while (clone) {
    len++;
    clone = clone.next;
  }
  
  let count = len - n;
  if (count === 0) return head.next;
    
    while(count >1 && root){
        count--;
        root=root.next;
    }
    console.log(root)
       root.next=root.next.next;
    return head;
};