function blurImage(image, radius) {
  const rows = image.length;
  const cols = image[0].length;
  const blurredImage = new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let neighbors = [];
      for (
        let x = Math.max(0, i - radius);
        x <= Math.min(rows - 1, i + radius);
        x++
      ) {
        for (
          let y = Math.max(0, j - radius);
          y <= Math.min(cols - 1, j + radius);
          y++
        ) {
          if (x !== i || y !== j) {
            neighbors.push(image[x][y]);
          }
        }
      }

      const mean = Math.floor(
        neighbors.reduce((sum, val) => sum + val, 0) / neighbors.length
      );
      blurredImage[i][j] = Math.floor((image[i][j] + mean) / 2);
    }
  }

  return blurredImage;
}

console.log(blurImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5));
