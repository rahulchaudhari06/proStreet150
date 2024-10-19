function isLeap(year) {
  if (year % 400 == 0) {
    console.log(`${year} is a leap year `);
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} is a leap year `);
  } else {
    console.log(`${year} is NOT leap year `);
  }
}

isLeap(2000);
isLeap(1900);
isLeap(2004);
isLeap(2003);
isLeap(1000);
