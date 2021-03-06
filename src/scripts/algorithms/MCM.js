export default function MatrixChainMultiplication(p) {
  let n = p.length;
  let matrix = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));
  for (let i = 1; i < n; i++) {
    matrix[i][i] = 0;
  }
  for (let chain_length = 2; chain_length < n; chain_length++) {
    for (let i = 1; i < n - chain_length + 1; i++) {
      let j = i + chain_length - 1;
      matrix[i][j] = Number.MAX_VALUE;
      for (let k = i; k < j; k++) {
        let q = matrix[i][k] + matrix[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < matrix[i][j]) {
          matrix[i][j] = q;
        }
      }
    }
  }
  return matrix[1][n - 1];
}

