function narcissistic(num) {
  splitNum = num.toString().split("");
  result = 0;
  for (let i = 0; i < splitNum.length; i++) {
    result = result + parseInt(splitNum[i] ** splitNum.length);
  }
  if (result == num) {
    console.log(`${num} is an narcissistic number.`);
  } else {
    console.log(`${num} is NOT an narcissistic number.`);
  }
}

narcissistic(135);
narcissistic(153);
narcissistic(8208);
