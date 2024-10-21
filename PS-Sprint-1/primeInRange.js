function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let primeList = [];
range = [1, 10000000];

for (let j = range[0]; j < range[1]; j++) {
  if (isPrime(j)) {
    primeList.push(j);
  }
}

console.log(primeList);
