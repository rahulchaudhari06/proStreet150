function isPrime(k) {
  for (let i = 2; i < k; i++) {
    if (k % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

function result(k) {
  if (isPrime(k)) {
    console.log(`${k} is PRIME`);
  } else {
    console.log(`${k} is NOT PRIME`);
  }
}

result(3);
result(11);
result(4);
result(7);
