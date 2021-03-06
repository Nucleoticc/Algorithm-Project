export default function longestCommonSubsequence(set1, set2) {
  const lcsMatrix = Array(set2.length + 1)
    .fill(null)
    .map(() => Array(set1.length + 1).fill(null));

  for (let columnIndex = 0; columnIndex <= set1.length; columnIndex += 1) {
    lcsMatrix[0][columnIndex] = 0;
  }
  for (let rowIndex = 0; rowIndex <= set2.length; rowIndex += 1) {
    lcsMatrix[rowIndex][0] = 0;
  }
  for (let rowIndex = 1; rowIndex <= set2.length; rowIndex += 1) {
    for (let columnIndex = 1; columnIndex <= set1.length; columnIndex += 1) {
      if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
        lcsMatrix[rowIndex][columnIndex] =
          lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
      } else {
        lcsMatrix[rowIndex][columnIndex] = Math.max(
          lcsMatrix[rowIndex - 1][columnIndex],
          lcsMatrix[rowIndex][columnIndex - 1]
        );
      }
    }
  }

  if (!lcsMatrix[set2.length][set1.length]) {
    return [""];
  }

  const longestSequence = [];
  let columnIndex = set1.length;
  let rowIndex = set2.length;

  while (columnIndex > 0 || rowIndex > 0) {
    if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
      longestSequence.unshift(set1[columnIndex - 1]);
      columnIndex -= 1;
      rowIndex -= 1;
    } else if (
      lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]
    ) {
      columnIndex -= 1;
    } else {
      rowIndex -= 1;
    }
  }

  return longestSequence;
}
