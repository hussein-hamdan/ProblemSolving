// solve problem using greedy algorithm
function canJump(arr: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + arr[i]!);

    if (maxReach >= arr.length - 1) {
      return true;
    }
  }

  return true;
}
const exampl1: number[] = [2, 3, 1, 1, 4];
const exampl2: number[] = [3, 2, 1, 0, 4];
const exampl3: number[] = [2, 0, 0, 1];
console.log("example 1:[2, 3, 1, 1, 4] => " + canJump(exampl1));
console.log("example 2:[3, 2, 1, 0, 4] => " + canJump(exampl2));
console.log("example 3:[2, 0, 0, 1] => " + canJump(exampl3));
