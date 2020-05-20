var StockSpanner = function() {
    this.arr=[];
    this.prevRes=0;
};
StockSpanner.prototype.next = function(price) {
    this.arr.push(price);
    var count=0;
    var length=this.arr.length;
    if(this.arr[length-2] && price==(this.arr[length-2])){
        this.prevRes+=1
        return this.prevRes;
    }
    while(length){
        if(price>=(this.arr[length-1])){
            count++;
        }else{
            break;
        }
        length--;
    }
    this.prevRes=count;
    return count;
};