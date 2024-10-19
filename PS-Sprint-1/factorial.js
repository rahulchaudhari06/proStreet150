//ITERATIVE
function factorial(n) {
  f = 1;
  for (let i = 2; i <= n; i++) {
    f *= i;
  }
  console.log(f);
}

factorial(5);

//RECURSIVE

function factorial2(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial2(n - 1);
}

for (let i = 0; i <= 10; i++) {
  console.log(factorial2(i));
}
