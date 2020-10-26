var evalRPN = function(tokens) {
    var str='+, -, *, /';
    var stack=[];
    for(let i=0;i<tokens.length;i++){
        if(str.indexOf(tokens[i])>-1){
            var second =stack.pop();
            var first =stack.pop();
            var result=eval(`(${first})${tokens[i]}(${second})`);
             stack.push(parseInt(result));
        }
        else{
            stack.push(tokens[i]);
        }
    }
    return stack[0];
};