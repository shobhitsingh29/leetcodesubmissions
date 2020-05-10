var findJudge = function(N, trust) {
    if(N==1){
        return 1;
    }
   if(trust.length<N-1){
       return -1;
   }
let judge=-1;
    var sum=(N*(N+1))/2;
var flag=false;
for(var i=N;i>0;i--){
    var sumN=sum;
     judge=i;

 for(var j=0;j<trust.length;j++){
    if(trust[j][0]==judge){
       judge=-1;
         break;
     }
     if(trust[j][1]==judge){
        sumN-=trust[j][0];
    }
    
     
 }
    if(sumN===judge){
        flag=true;
        break; 
    }
}
    if(!flag){
        return -1;
    }
return judge;

    
};