/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
    var digit, result = 0

    while( n ){
        digit = n % 10                 //  Get last digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit
        if(result>2147483647){
      return 0
  }
    if(result<-2147483648){
      return 0
  }
        //  Ex. 123 → 1230 + 4 → 1234
        n = n/10|0                      //  Remove last digit. Ex. 123 → 12.3 → 12
    }  
  
    return result
};