// function isPalindrome(String) {
//   const cleanString = String.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const rev = cleanString.split("").reverse().join("");
//   //   console.log(rev);
//   if (cleanString == rev) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("Civic")); //true
// console.log(isPalindrome("Malayalam")); //true
// console.log(isPalindrome("Rahul")); //false
// console.log(isPalindrome("Radar")); //true

// ------------------------------------------------------

// function reverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];0
//     arr[end] = temp;

//     start++;
//     end--;
//   }

//   return arr;

//console.log(reverseArray([1, 2, 3, 4, 5]));

function isPalindrome(str) {
  cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0;
  let end = cleanStr.length - 1;

  while (start < end) {
    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }

    start++;
    end--;
  }
  return true; // if all characters match...
}

console.log(isPalindrome("Civic")); //true
console.log(isPalindrome("Malayalam")); //true
console.log(isPalindrome("Rahul")); //false
console.log(isPalindrome("Radar")); //true
