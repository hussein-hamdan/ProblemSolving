const isValid = (
  img: number[][],
  sr: number,
  sc: number,
  originalColor: number,
): boolean => {
  return (
    sr >= 0 &&
    sr < img.length &&
    sc >= 0 &&
    sc < img[0]!.length && // fix
    img[sr]![sc] === originalColor
  );
};

const dfs = (
  img: number[][],
  sr: number,
  sc: number,
  newColor: number,
  originalColor: number,
): void => {
  if (!isValid(img, sr, sc, originalColor)) {
    return;
  }

  img[sr]![sc] = newColor;

  
  dfs(img, sr + 1, sc, newColor, originalColor);

  dfs(img, sr - 1, sc, newColor, originalColor);

  dfs(img, sr, sc + 1, newColor, originalColor);

  dfs(img, sr, sc - 1, newColor, originalColor);
};

const floodFill = (
  img: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] => {
  let originalColor: number = img[sr]![sc]!;

  // avoid infinite recursion
  if (originalColor === newColor) {
    return img;
  }

  dfs(img, sr, sc, newColor, originalColor);

  return img;
};

const img: number[][] = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];
console.log(floodFill(img, 1, 1, 2));
