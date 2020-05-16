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
const oddEvenList = function (head) {
    if (!head || head.next == null) {
        return head;
    }
    let tail = new ListNode(head.val, head.next);
    let odd = new ListNode(head.val, head.next);
    const oddref = odd;
    let even = new ListNode(head.next.val, head.next && head.next.next);
    const evenref = even;
    while (tail.next !== null) {
        tail = tail.next;
        if (tail.next == null) {
            odd.next = null;
            break;
        }
        tail = tail.next;
        odd.next = new ListNode(tail.val, tail.next);
        odd = odd.next;
    }
    tail = new ListNode(head.val, head.next);
    while (tail.next && tail.next.next) {
        tail = tail.next;
        tail = tail.next;
        if (tail.next == null) {
            even.next = null;
            break;
        }
        even.next = new ListNode(tail.next && tail.next.val, tail.next && tail.next.next);
        even = even.next;
    }
    odd.next = evenref;
    return oddref;
};
