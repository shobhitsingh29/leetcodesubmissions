/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows==0){
        return [];
    }
    var res=[[1]];
    if(numRows==1){
        return res;
    }
    if(numRows==2){
        res=[[1],[1,1]]
        return res;
    }
    if(numRows==3){
        res=[[1],[1,1],[1,2,1]]
        return res;
    }
    res=[[1],[1,1],[1,2,1]]
    for(var i=3; i< numRows;i++){
        res[i]=[];
         res[i][0]=1;
         res[i][i]=1;
        for(var j=1; j< i;j++){
            res[i][j]=res[i-1][j-1]+res[i-1][j];
        
        }
    }
        return res;    
    
};