/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var str=[];
    var obj={
        
        '3':"Fizz",
        '5':"Buzz",
        
    };
    
    for(var i=1;i<=n;i++){
        
        
        var temp='';
        
        for(var k in obj){
             if(i%k==0){
         temp+=obj[k];
        }
        }
            
            
        if(temp==''){
           temp+=String(i);
        }
        
        str.push(temp)
    }
    return str;
    
};