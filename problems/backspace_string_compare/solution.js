/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const output=(input,res=[])=>{
        [...input].map((item)=>{
        if(item==='#'){
            res.pop();            
        }else{
            res.push(item);
        }
    });

        return res.join('');;
    }
    return output(S)===output(T)
};