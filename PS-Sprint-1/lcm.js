//lcm  = a.b / gcd(a,b)

function gcd(a, b) {
  if (!b) {
    // if  b becomes 0 ,
    return a; // the gcd becomes a
  }
  return gcd(b, a % b); // call the function recursively with(b , a % b)
}

function lcm(a, b) {
  result = (a * b) / gcd(a, b);
  console.log(result);
}

lcm(12, 15);
