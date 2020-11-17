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

var swapPairs = function(head,count=0) {
    
if(head==null || head.next==null) {
return head;
}else {
 current=head;
head=current.next;
current.next=head.next;
head.next=current;
while(current.next!=null && current.next.next!=null) {
 temp=current.next;
current.next=current.next.next;
temp.next=current.next.next;
current.next.next=temp;
current=current.next.next;
}
return head;
}
};