// armstrong number
// number which is equal to sum of power of length of number  of it individual digits

function armstrong(num) {
  splitNum = num.toString().split("");
  result = 0;
  for (let i = 0; i < splitNum.length; i++) {
    result = result + parseInt(splitNum[i] ** splitNum.length);
  }
  if (result == num) {
    console.log(`${num} is an Armstrong number.`);
  } else {
    console.log(`${num} is NOT an Armstrong number.`);
  }
}

armstrong(153);
armstrong(370);
armstrong(371);
armstrong(93084);
armstrong(92790);
armstrong(88593477);
