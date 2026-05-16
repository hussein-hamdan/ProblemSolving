function cutRodRecur(i: number, price: number[], dp: number[]): number {
  if (i === 0) return 0;

  if (dp[i] !== -1) return dp[i]!;

  let ans = 0;

  for (let j = 1; j <= i; j++) {
    ans = Math.max(ans, price[j]! + cutRodRecur(i - j, price, dp));
  }

  return (dp[i] = ans);
}

function cutRod(price: number[]) {
  const n = price.length - 1;
  const dp = Array(n + 1).fill(-1);
  return cutRodRecur(n, price, dp);
}

const price = [0, 1, 5, 8, 9, 10, 17, 17, 20];
console.log(cutRod(price));
