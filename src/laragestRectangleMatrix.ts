function largestRectangleMatrix(mat: number[][]): number {
  const rows = mat.length;
  const cols = mat[0]!.length;

  let maxArea = 0;

  for (let top = 0; top < rows; top++) {
    // Represents valid columns between top and bottom rows
    const temp = new Array(cols).fill(1);

    for (let bottom = top; bottom < rows; bottom++) {
      // Apply AND with the current row
      for (let col = 0; col < cols; col++) {
        temp[col] = temp[col] & mat[bottom]![col]!;
      }

      // Find the longest consecutive sequence of 1s
      let width = 0;

      for (let col = 0; col < cols; col++) {
        if (temp[col] === 1) {
          width++;
        } else {
          width = 0;
        }

        const height = bottom - top + 1;

        maxArea = Math.max(maxArea, width * height);
      }
    }
  }

  return maxArea;
}
const mat: number[][] = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];
console.log(largestRectangleMatrix(mat));
