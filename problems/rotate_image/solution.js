var rotate = function(matrix) {
for(var i=0;i<matrix.length;i++){
for(var j=0;j<i;j++){
var temp = matrix[i][j];
matrix[i][j]=matrix[j][i];
matrix[j][i] = temp;
}
}
for(var i=0;i<matrix.length;i++){
matrix[i].reverse();
}

};