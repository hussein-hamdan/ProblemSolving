function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i]!;

    let left = i;
    let right = i;

    // Expand to the left
    while (left > 0 && heights[left - 1]! >= currentHeight) {
      left--;
    }

    // Expand to the right
    while (right < heights.length - 1 && heights[right + 1]! >= currentHeight) {
      right++;
    }

    const width = right - left + 1;
    const area = currentHeight * width;

    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
const heights: number[] = [6, 2, 5, 4, 5, 1, 6];
console.log(largestRectangleArea(heights));
