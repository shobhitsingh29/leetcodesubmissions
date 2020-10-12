
var merge = function(A, M, B, N) {
    for (let i = M; i < M + N; ++i)
        A[i] = B[i - M];
    A.sort((a, b) => a - b);
};