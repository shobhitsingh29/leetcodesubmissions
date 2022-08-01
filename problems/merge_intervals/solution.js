/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 1;
    let j = 0;
    let newIntervals = [];
    while (i < intervals.length) {
        if (intervals[j][1] >= intervals[i][0]) {
            let max = intervals[j][1] > intervals[i][1] ? intervals[j][1] : intervals[i][1];
            while(i!==intervals.length -1 && max >= intervals[i+1][0]) {
                max = max > intervals[i+1][1] ? max : intervals[i+1][1];
                i++;
            }
            intervals[i][1];
            newIntervals.push([intervals[j][0], max]);
            j = i+1;
            i = i+2;
        } else {
            newIntervals.push(intervals[j]);
            j++;
            i++;
        }
    }
    if (j!==intervals.length) {
        newIntervals.push(intervals[j]);
    }
    return newIntervals;
};