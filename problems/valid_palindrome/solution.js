function reverseString(str) {
  if (str === "") 
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
var isPalindrome = function(s) {
    var ps=''
    for(var i=0;i<s.length;i++){
        if((s.charCodeAt(i)>47 && s.charCodeAt(i)<58) ||(s.charCodeAt(i)>64 && s.charCodeAt(i)<91)||(s.charCodeAt(i)>96 && s.charCodeAt(i)<123)){
           ps+=s[i].toLowerCase();
           }
    }
    if(reverseString(ps)===ps){
        return true;
    }
    return false;
};