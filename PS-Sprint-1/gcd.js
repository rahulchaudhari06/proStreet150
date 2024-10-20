// function primeFactors(n) {
//   factors = [];
//   while (n % 2 == 0) {
//     factors.push(2);
//     n = n / 2;
//   }
//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     while (n % i === 0) {
//       factors.push(i);
//       n = n / i;
//     }
//   }

//   //  If n is prime and greater than 2, it won't have any factors smaller than itself.
//   // so n will remain same and also be prime since it came out of loop
//   // so last check if n is prime and greater than 2 it is also a prime number

//   if (n > 2) {
//     factors.push(n);
//   }
//   return factors;
// }

// console.log(primeFactors(24));
// console.log(primeFactors(30));

// function gcd(n1, n2) {
//   while (!(n1.length != n2.length)) {
//     n1 = primeFactors(24);
//     n2 = primeFactors(30);
//     if (n1.length < n2.length) {
//       n1.push(0);
//     }
//     if (n1.length > n2.length) {
//       n2.push(0);
//     }
//   }
//   // any element of n1, n2 factors is common => product of all those => gcd

//   for (let i = 0; i <= n1.length; i++) {
//     common = [];
//     if ((n1[i] = n2[i])) {
//       common.push(n1[i]);
//     }
//   }
//   console.log(common);
// }

// gcd();

// --------------------SILLY FAILED ATTEMPT ABOVE 🤓☝🏼--------------------------------------

function gcd(a, b) {
  if (!b) {
    // if  b becomes 0 ,
    return a; // the gcd becomes a
  }
  return gcd(b, a % b); // call the function recursively with(b , a % b)
}
console.log(gcd(12, 15));
console.log(gcd(8, 28));
console.log(gcd(24, 30));
console.log(gcd(14, 49));
console.log(gcd(20, 50));
