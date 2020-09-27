var twoSum = function(nums, target) {
    var obj={}
    nums.map((val,index)=>{
        
        if(!obj[val]){
            obj[val]={};
            obj[val].count=1;
            obj[val].index=index;
        }else{
             obj[val].count+=1;
            obj[val].index1=index;
        }
    })
    
        for(var k in obj){
            if(obj[target-k]){
                if(obj[k].count===2){
                    
                     return [obj[k].index,obj[k].index1]
                };
                
                return [obj[k].index,obj[target-k].index]
                
                
            }
        }
    
};