export default function minCoinChange(amount, coins) {
  const minCoins = new Array(amount + 1).fill(Infinity);
  minCoins[0] = 0;
  for (let coin of coins) {
    for (let i = 0; i <= amount; i += 1) {
      if (i - coin >= 0)
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  }
  return minCoins[amount] !== Infinity ? minCoins[amount] : -1;
}
