var hammingDistance = function(x, y) {
    let count = 0;
    x = x.toString(2);
    y = y.toString(2);
    let diff = x.length - y.length;
    if (diff < 0) {
        x = '0'.repeat(Math.abs(diff)) + x;
    };
    if (diff > 0) {
        y = '0'.repeat(Math.abs(diff)) + y;
    };
    x = x.split('');
    y = y.split('');
    x.forEach((a, i) => {
        if (a - y[i]) {
            count += 1;
        };
    });
    return count;
};