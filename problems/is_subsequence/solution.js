var isSubsequence = function(s, t) {
    if(t.length<s.length){
        return false;
    }
    let left =0;
    let right=t.length-1;
    let i=0;
    let j=s.length-1;
    let count=0;
    while(left<=right){
        if(s[i]==t[left]){
            i++;
            count++;
             if(count===s.length){
                return true;
             }
        }
        if(s[j]==t[right] && right!==left){
            j--;
            count++;
             if(count===s.length){
                    return true;
              }
        }
          left++;
          right--;
    }
    if(count===s.length){
        return true;
    }
    return false;
};