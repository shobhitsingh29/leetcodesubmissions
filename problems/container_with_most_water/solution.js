/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var area=0;
    for(var i=0;i<height.length;i++){
         for(var j=i+1;j<height.length;j++){
              area=Math.max(area, Math.min(height[i],height[j])*Math.abs(j-i));
         }
    }
    return (area)
};