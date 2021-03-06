export default function knapSack(v, w, W) {
  let matrix = Array(v.length + 1)
    .fill(null)
    .map(() => Array(W + 1).fill(0));

  for (let i = 1; i < v.length + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (w[i - 1] > j) {
        matrix[i][j] = matrix[i - 1][j];
      } else {
        matrix[i][j] = Math.max(
          matrix[i - 1][j],
          matrix[i - 1][j - w[i - 1]] + v[i - 1]
        );
      }
    }
  }
  let temp = W;
  let l1 = [];
  for (let i = v.length; i > 0 && temp > 0; i--) {
    if (matrix[i][temp] == matrix[i - 1][temp]) {
      continue;
    } else {
      l1.push(w[i - 1]);
      temp -= w[i - 1];
    }
  }
  return {
    Length: matrix[v.length][W],
    List: l1,
  };
}