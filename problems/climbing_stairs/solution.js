const res={};
const climbStairs = function(n) {
     var sqrt5=Math.sqrt(5);
        var fibn=Math.pow((1+sqrt5)/2,n+1)-Math.pow((1-sqrt5)/2,n+1);
        return parseInt(fibn/sqrt5);
};