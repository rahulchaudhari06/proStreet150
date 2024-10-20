function countStuff(str) {
  cleanStr = str.replace(/[^\w]/g, "");
  let consonants = cleanStr.match(/[^aeiouAEIOU\s]/g);
  let vowels = cleanStr.match(/[aeiouAEIOU]/g);

  console.log(`Vowels: ${vowels.length}`);
  console.log(`Consonants: ${consonants.length}`);
}

countStuff("Hello world");
