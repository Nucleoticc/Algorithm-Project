function subsetSum(arr, arrLength, total) {
  let matrix = Array(arrLength + 1)
    .fill(null)
    .map(() => Array(total + 1).fill(false));
  for (let i = 0; i < arrLength + 1; i++) {
    matrix[i][0] = true;
  }
  for (let i = 1; i < arrLength + 1; i++) {
    for (let j = 1; j < total + 1; j++) {
      if (arr[i - 1] > j) {
        matrix[i][j] = matrix[i - 1][j];
      } else {
        matrix[i][j] = matrix[i - 1][j] || matrix[i - 1][j - arr[i - 1]];
      }
    }
  }
  if (matrix[arrLength][total]) {
    return "Matrix can be partitioned";
  } else {
    return "Matrix cannot be partitioned";
  }
}

export default function partition(arr) {
  let total = arr.reduce((a, b) => a + b, 0);
  return (total & 1) == 0 && subsetSum(arr, arr.length, Math.round(total / 2));
}
