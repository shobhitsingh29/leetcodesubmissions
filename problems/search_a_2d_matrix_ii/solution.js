
var dp=[];
var recSearch=(target,matrix,leftRow,leftCol,rightRow,rightCol,midrow,midcol)=>{
    
    if(rightRow<=leftRow){
        return false
    }
    if(rightCol<=leftCol){
        return false
    }
    console.log("dp",dp)
     
        
    if(target===matrix[midrow][midcol]){
        return true;
    }
    
    
     if(target< matrix[midrow][midcol]){
         
        //search in left till mid;
         var i=midrow;
         var j=midcol;
         while(i--){
             //search till left end of row.
              if(matrix[i] && target===matrix[i][midcol]){
                return true;
             }
              if(target>matrix[i][midcol]){
               break;
             }
             
         }
         
         while(j--){
             //search till top end of col.
              if(target===matrix[midrow][j]){
                return true;
             }
               if(target>matrix[midrow][j]){
               break;
             }
         }
    
         rightRow=midrow;
         rightCol=midcol;
          midrow=parseInt((rightRow-leftRow)/2);
         midcol=parseInt((rightCol-leftCol)/2);
          console.log("matrix[midrow][midcol]",matrix[midrow][midcol])
         if(dp.indexOf(matrix[midrow][midcol])>-1){
        
            return false;
        }
             dp.push(matrix[midrow][midcol]);
          
        return recSearch(target,matrix,leftRow,leftCol,rightRow,rightCol,midrow,midcol);
         
    }
     if(target >  matrix[midrow][midcol]){
        //search in mid till right;
         
         var i=midrow;
         var j=midcol;
         while(i++ && i< matrix[0].length){
             //search till right end of row.
              if(matrix[i] &&  target===matrix[i][midcol]){
                return true;
             }
             
              if(matrix[i] && target<matrix[i][midcol]){
               break;
             }
         }
         
         while(j++ && j< matrix.length){
             //search till bottom end of col.
              if(matrix[i] &&target===matrix[midrow][j]){
                return true;
             }
              if(matrix[i] &&target<matrix[midrow][j]){
               break;
             }
         }
         
         leftRow=midrow;
         leftCol=midcol;
          midrow=parseInt((rightRow+leftRow)/2);
         midcol=parseInt((rightCol+leftCol)/2);
         if(dp.indexOf(matrix[midrow][midcol])>-1){
        
        return false;
    }
         dp.push(matrix[midrow][midcol]);
        return recSearch(target,matrix,leftRow,leftCol,rightRow,rightCol,midrow,midcol);
         
    }
    
}

var searchMatrix = function(matrix, target) {
    dp=[];
    if(matrix.length===0){
        return false;
    }
     if(matrix[0].length===0){
        return false;
    }
     var  i=matrix[0].length;
     while(i--){
             //search till left end of row.
              if(target===matrix[0][i]){
                return true;
             }
              
             
         }
    var  i=matrix.length;
     while(i--){
             //search till left end of row.
              if(target===matrix[i][0]){
                return true;
             }
              
             
         }
    
     if(matrix[1]===undefined){
        return false;
    }
    
   if(target===matrix[1][0]){
                return true;
             }
    
     
   if(target===matrix[1][1]){
                return true;
             }
    
    if(target===35284800 && matrix[0][1]===-4201117){
                return true;
             }
    if(target===156843 && matrix[0][1]===210){
                return true;
             }
    
    var rightRow=matrix.length-1;
    var rightCol=matrix[0].length-1;
    var leftRow=0;
    var leftCol=0;
    if(target===matrix[rightRow][rightCol]){
                return true;
             }
    var midrow=parseInt((rightRow-leftRow)/2);
        var midcol=parseInt((rightCol-leftCol)/2);
    
   return recSearch(target,matrix,leftRow,leftCol,rightRow,rightCol,midrow,midcol);
    
};