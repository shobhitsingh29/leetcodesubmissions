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
 var res;
var reverseList = function(head) {
   if (head == null || head.next == null){
        return head;
       
    }
    
    // go all the way to the end
    var lastNodeRevList= reverseList(head.next)
	// do swap
    
    head.next.next = head;
    head.next = null;
    return lastNodeRevList;
    
};