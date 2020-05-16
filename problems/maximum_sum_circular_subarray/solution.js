var maxSubarraySumCircular = function(A) {
    var arr=[...A]
    arr=arr.concat(arr);
    let maxtillnow=0;
    let maxFinal=0;
    let maxFinalFinal=0;
    var sortedArr=[...A].sort();
    
    if(sortedArr[0]<0 && sortedArr[A.length-1]<0){
        return sortedArr[0];
        
    }
    
    if(sortedArr[0]>0){
         for(var i=0;i<A.length;i++){
       
         maxtillnow=maxtillnow+arr[i];
        
        if(maxtillnow<0){
            maxtillnow=0;
        }
           
        if(maxFinal<maxtillnow){
            maxFinal=maxtillnow;
        }
        
    }
        return maxFinal;
    }
    for(var k=0;k<A.length;k++){
        if(A[k]>0){

        }else{
            continue;
        }
    for(var i=k;i<A.length+k;i++){
       
         maxtillnow=maxtillnow+arr[i];
        
        if(maxtillnow<0){
            maxtillnow=0;
        }
           
        if(maxFinal<maxtillnow){
            maxFinal=maxtillnow;
        }
        
    }
      
          if(maxFinalFinal<maxFinal){
            maxFinalFinal=maxFinal;
        }
          maxFinal=0;
     maxtillnow=0;
    }
    if(maxFinalFinal==0){
        A.sort();
        return A[0]
    }
    return maxFinalFinal;
    
    
};