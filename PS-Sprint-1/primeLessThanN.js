function isPrime(k) {
  for (let i = 2; i < k; i++) {
    if (k % i == 0) {
      return true;
    } else {
      return false;
    }
  }
}

function primeLessThanN(n, k) {
  let primes = [];
  for (let j = 0; j < n; j++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
}
