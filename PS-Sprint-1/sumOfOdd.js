function sumOfOdd(n) {
  let odds = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  console.log(odds);
  console.log(odds.reduce((a, c) => a + c));
}

sumOfOdd(10);
