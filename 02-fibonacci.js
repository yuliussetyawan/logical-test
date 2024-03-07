function fibonacciSeq(n) {
  let fibonacci = [1, 1];
  for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci.slice(0, n);
}

console.log(fibonacciSeq(5));
[ 1, 1, 2, 3, 5 ]