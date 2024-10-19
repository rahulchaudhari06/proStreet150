// fibonacci series
// f(0)=0;  f(1)= 1; f(n) = f(n-1) + f(n-2) for n>1

function fib(n) {
  if (n == 0) {
    console.log(1);
  } else if (n == 1) {
    console.log([0, 1]);
  } else if (n > 1) {
    arr = [];
    secondLast = 0;
    last = 1;
    for (let i = 2; i <= n; i++) {
      cur = last + secondLast;
      secondLast = last;
      last = cur;
      arr.push(cur);
    }
    arr.unshift(0);
    console.log(arr);
  }
}

fib(1);
fib(10);
