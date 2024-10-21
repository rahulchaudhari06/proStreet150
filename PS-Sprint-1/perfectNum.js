function perfectNum(num) {
  let divisors = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
      divisors.push(num % i);
    }
  }
  if (divisors.sort().reduce((a, c) => a + c, 0) == num) {
    console.log(
      `${num} is a perfect num since all its divisors add upto the number itself`
    );
  } else {
    console.log("NOPE");
  }
}

perfectNum(28);
perfectNum(30);
perfectNum(496);
