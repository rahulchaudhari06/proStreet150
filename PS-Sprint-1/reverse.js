function rev(str) {
  arr = str.split("");
  revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  console.log(revArr.join(""));
}

rev("rahul");
rev("arshiya");
rev("manvi");
rev("ed-sheeran");
