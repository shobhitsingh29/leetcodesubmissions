var detectCycle = function(head) {
    
    //Floyd cycle detection.
    //1. s1, s2 initialized with head, s1 move 1 at a time, s2 move 2 at a time. 
    //2. find their first meeting point.
    //3. s1 keep moving, s2 repoint to head to start from begining again, and this time move by 1 at a time.
    //4. where they meet is the cycle start point. This is proved mathematically by Floyd.

    
    if(!head) return null;
    if(head && !(head.next)) return null;
 
    let s1 = head;
    let s2 = head;
    
    while(s2 !== null){
        
        s1 = s1.next;
        
        if(s2.next && s2.next.next) {
            s2 = s2.next.next ;
        }else{
            return null;
        }
        
        if(s1 === s2){
            break;
        }
    }
    
    s1 = head;

    while(s1 !== s2){
        s1 = s1.next;
        s2 = s2.next;
    }
    return s1;
};