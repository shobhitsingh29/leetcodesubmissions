var hasCycle = function(head) {
    let slow = fast = head;
    while(fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
};