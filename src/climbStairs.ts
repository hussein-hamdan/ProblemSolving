function climbStairs(n: number): number {

  if (n <= 2) {
    return n;
  }

  let first = 1; // ways(1)
  let second = 2; // ways(2)

  for (let i = 3; i <= n; i++) {
    const current = first + second;

    first = second;
    second = current;
  }

  return second;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8