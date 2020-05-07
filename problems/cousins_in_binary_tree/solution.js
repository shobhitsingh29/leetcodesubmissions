var isCousins = function(root, x, y) {
    var level=0
    var queue=[];
    var parent={};
    queue.push(root);
    queue.push(null);
    
    while(queue.length){

        debugger;
        var value=queue.shift();
        if(value==null){
            level++;
            queue.push(null);
            if(queue[0] == null){
                break;// You are encountering two consecutive `nulls` means, you visited all the nodes.
            }else{
              continue;  
            } 
        }
        
        if(value && value.left){
            
        queue.push(value.left);
        }
     if(value && value.right){    
        queue.push(value.right);
        }
        if( value.left && value.left.val==x || value.right && value.right.val==x ){
            
             parent[x]={level:level,parent:value.val};
        }
            
            if( value.left && value.left.val==y || value.right && value.right.val==y)
            
        {
                 parent[y]={level:level,parent:value.val};
            }

    }
    
    var parArr=Object.values(parent)
    
    if(parArr && parArr.length>1){
         if(parArr[0].level===parArr[1].level && parArr[0].parent!==parArr[1].parent){
        return true;
    }else{
        return false;
    }
    }
        return false;
    
    
};