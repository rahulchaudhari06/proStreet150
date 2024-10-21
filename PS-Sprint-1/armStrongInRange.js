function armstrongInRange(n) {
  armstrongs = [];
  for (let i = 10; i < n; i++) {
    let s = i.toString().split("");
    let result = 0;

    for (let j = 0; j < s.length; j++) {
      result += Math.pow(parseInt(s[j]), s.length);
    }
    if (result == i) {
      armstrongs.push(i);
    }
  }
  armstrongs.unshift(1);
  console.log(armstrongs);
}

armstrongInRange(500);
armstrongInRange(2000);
armstrongInRange(10000);
