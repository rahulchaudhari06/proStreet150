function fibona(n, posn) {
  let fibs = [];
  if (n == 0) {
    fibs.push(0);
  } else if (n == 1) {
    fibs.push(0, 1);
  }
  if (n > 1) {
    secondLast = 0;
    last = 1;
    for (let i = 2; i <= n; i++) {
      cur = last + secondLast;
      secondLast = last;
      last = cur;
      fibs.push(cur);
    }
  }
  console.log(fibs[posn]);
}

fibona(20, 6);
