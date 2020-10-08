var reverseBits = function(n) {

var str=n.toString(2).split("").reverse().join("");
while(str.length<32){
    str=str+'0';
}
console.log(str);
return parseInt(str, 2);}
