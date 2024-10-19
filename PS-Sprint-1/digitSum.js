function sumDigits(num) {
  root = num.toString().split("");
  //   console.log(root);
  let sum = 0;

  for (let i = 0; i < root.length; i++) {
    sum += parseInt(root[i]);
  }
  console.log(sum);
}

sumDigits(51);
sumDigits(1233);
sumDigits(1322);
sumDigits(8765);
sumDigits(63765);
sumDigits(34567);
