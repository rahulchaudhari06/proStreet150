function numPattern(rows) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }
}

numPattern(4);
numPattern(8);
