/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let res=-1;
    
    let map={};
        let totalSum = nums.reduce((a, b) => a+b, 0); 

    map[nums.length-1]={};
    map[0]={};
    map[nums.length-1]['right']=0;
     let newNum=[...nums]
    newNum.map((i,index)=>{
        
    if(index>0){
            newNum[index]=Number(newNum[index])+Number(newNum[index-1]);
        if(!map[index]){
            map[index]={}
        }
        map[index]['left']=newNum[index-1];
        map[index]['right']=totalSum-newNum[index];
         if( map[index]['right']=== map[index]['left']){
                res=index;
            newNum=[]
        }
            return newNum[index];
        }else{
            if(!map[index]){
            map[index]={}
        }
        map[index]['left']=0;
        map[index]['right']=totalSum-newNum[index];
             if( map[index]['right']=== map[index]['left']){
                res=index;
            newNum=[]
        }
            return i;
        }
        if( map[index]['right']=== map[index]['left']){
                res=i;
            newNum=[]
        }
    });
    
    return res
    
};
