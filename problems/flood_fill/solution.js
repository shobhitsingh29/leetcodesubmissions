var floodFill = function(image, x, y, newColor) {
    if(image[x][y]==newColor){
        return image;
    }
    image=filler(image,x,y,newColor,image[x][y]);
    return image;
    
};
var dp=[];
var filler=function(image,x,y,newColor,colorToReplace){
    if(image[x]==undefined || image[x][y]==undefined){
        if(!dp.includes(x+"+"+y)){
        dp.push(x+"+"+y);
        }else{
            return;
        }
         return;
    }
        if(colorToReplace!=image[x][y]){
            return;
        }
    if(colorToReplace==image[x][y]){
        image[x][y]=newColor;
        filler(image,x-1,y,newColor,colorToReplace);
        filler(image,x,y-1,newColor,colorToReplace);
        filler(image,x+1,y,newColor,colorToReplace);
        filler(image,x,y+1,newColor,colorToReplace);
        }
    return image;
}