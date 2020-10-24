var topKFrequent = function(nums, k) {
    var hashMap=new Map();
    nums.map((val)=>{
        if(hashMap.has(val)){
            var count=hashMap.get(val);
            hashMap.set(val,count+1);
        }else{
             hashMap.set(val,1);
        }
    });
    var output=[];
    const mapSort1 = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));
   for(let [i,val] of mapSort1){
           output.push(i);
            k--;
        if(k==0){
           return output;
       }
   }
};