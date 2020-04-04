
var isHappy = function(n) {
var map = new Map();
    while (1) { 
        if (n == 1) 
          {
              return true; 
              break;
          } if (map.has(n)) {
      return false;
    }else {
      map.set(n, n);
    }
            let sum = 0;
        while (n) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }
        
        n = sum;
    } 
          
             
    }
      