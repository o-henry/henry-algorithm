/**
 * @param {n} number
 * @returns {memo[n]} number
 */

function fibonacci(n) {
  let memo = {};

  if (memo[n]) return memo[n];
  if (n <= 1) return 1;

  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}

console.log(fibonacci(10));