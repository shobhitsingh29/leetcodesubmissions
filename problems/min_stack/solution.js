/**
 * initialize your data structure here.
 */
var MinStack = function() {
    
    this.stack=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   let min = Math.min(...this.stack)
return min
};