function largeSmall(arr) {
  arr.sort();
  return [arr[0], arr[arr.length - 1]];
}

console.log(largeSmall([1, 4, 2, 3, 5]));

// TODO: use loops to sort
