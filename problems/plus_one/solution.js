var plusOne = function(digits) {
    var str=''
    digits.map((val)=>{
        str+=val;
    });
    var num=BigInt(str)+BigInt(1);
    var string=String(num);
    string=[...string.split('')]
    string=string.map(Number);
    return string
};