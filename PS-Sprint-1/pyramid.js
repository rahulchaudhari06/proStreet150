function pyramid(height) {
  for (let i = 0; i < height; i++) {
    let row = "";

    // Add spaces before the stars
    for (let j = 0; j < height - i - 1; j++) {
      row += " ";
    }

    // Add stars
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    // Print the current row
    console.log(row);
  }
}

pyramid(5);
