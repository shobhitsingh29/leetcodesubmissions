const checkStraightLine = co => {
  const m = (co[0][1] - co[1][1]) / (co[0][0] - co[1][0]);
  const c = co[0][1] - m * co[0][0];
  
  return co.every(pair => pair[1] === m * pair[0] + c);
}