var singleNumber = function(nums) {
    var obj={};
    nums.map((v)=>{
        if(obj[v]){
            obj[v]+=1;
        }else{
            obj[v]=1;
        }});
let ans=null;
Object.entries(obj).map((v)=>{
if(v[1]==1){
ans=v[0];
}
})
return Number(ans);        
};