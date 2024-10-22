function sumOfEven(n) {
  evens = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  console.log(evens);

  console.log(evens.reduce((a, c) => a + c));
}

sumOfEven(5);
