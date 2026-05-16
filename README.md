# 🧠 Algorithm Problems in TypeScript

A clean and structured collection of classic algorithm problems implemented in **TypeScript**, designed for interview preparation and strengthening problem-solving skills.

This project follows a modular structure where each problem is implemented in a separate file for clarity, maintainability, and easy testing.

---

## 📌 Included Problems & Explanations

| # | Problem | Topic | Description (Brief Explanation) |
|---|---------|-------|---------------------------------|
| 1 | **Flood Fill** | DFS / Graph | Alters the color of a target pixel and all its horizontally/vertically connected neighboring pixels of the same color. |
| 2 | **Trapping Rain Water** | Two Pointers | Calculates how much rainwater can be trapped between bars of varying heights after a storm. |
| 3 | **Climbing Stairs** | Dynamic Programming | Finds the number of distinct ways to reach the top of a staircase of $N$ steps, taking either 1 or 2 steps at a time. |
| 4 | **Jump Game** | Greedy | Determines if you can reach the last index of an array, given that each element represents your maximum jump length. |
| 5 | **Rod Cutting** | DP / Recursion | Finds the maximum revenue obtainable by cutting up a rod of length $N$ and selling the pieces based on a price list. |
| 6 | **Largest Rectangle in Histogram** | Stack | Finds the area of the largest rectangle that can be formed within a given histogram's bar heights. |
| 7 | **Maximum Rectangle in Binary Matrix** | Matrix / Histogram | Finds the area of the largest rectangle containing only `1`s in a given 2D binary matrix. |

---

## 📁 Project Structure


```

```text
Markdown file generated successfully.

```text
src/
│
├── floodFill.ts
├── totalAmountOfWater.ts
├── climbStairs.ts
├── canJump.ts
├── cutRod.ts
├── largestRectangleArea.ts
└── largestRectangleMatrix.ts

```

---

## ⚙️ Requirements

* Node.js (>= 14)
* TypeScript

---

## 📦 Installation

Install TypeScript globally:

```bash
npm install -g typescript

```

Check installation:

```bash
tsc -v
node -v

```

---

## 🚀 How to Run

### 1. Compile a TypeScript file

```bash
tsc src/floodFill.ts

```

This will generate a `.js` file in the same directory.

---

### 2. Run with Node.js

```bash
node dist/floodFill.js

```

---

## 🧪 Run Any Problem

### Flood Fill

```bash
tsc src/floodFill.ts && node dist/floodFill.js

```

### Trapping Rain Water

```bash
tsc src/totalAmountOfWater.ts && node dist/totalAmountOfWater.js

```

### Climbing Stairs

```bash
tsc src/climbStairs.ts && node dist/climbStairs.js

```

### Jump Game

```bash
tsc src/canJump.ts && node dist/canJump.js

```

### Rod Cutting

```bash
tsc src/cutRod.ts && node dist/cutRod.js

```

### Largest Rectangle (Histogram)

```bash
tsc src/largestRectangleArea.ts && node dist/largestRectangleArea.js

```

### Maximum Rectangle (Matrix)

```bash
tsc src/largestRectangleMatrix.ts && node dist/largestRectangleMatrix.js

```

---

## 🧠 Key Concepts Covered

* Depth First Search (DFS)
* Greedy Algorithms
* Dynamic Programming
* Recursion + Memoization
* Two Pointers Technique
* Stack-based Solutions
* Matrix Processing

---

## 📊 Complexity Overview

| Problem | Time Complexity | Space Complexity |
| --- | --- | --- |
| Flood Fill | $O(R \times C)$ | $O(R \times C)$ |
| Trapping Rain Water | $O(N)$ | $O(1)$ |
| Climbing Stairs | $O(N)$ | $O(1)$ |
| Jump Game | $O(N)$ | $O(1)$ |
| Rod Cutting | $O(N^2)$ | $O(N)$ |
| Histogram | $O(N^2)$ / $O(N)$ optimized | $O(1)$ / $O(N)$ |
| Matrix Rectangle | $O(R^2 \times C)$ / $O(R \times C)$ optimized | $O(C)$ |

*Where $N$ is the number of elements, $R$ is rows, and $C$ is columns.*

---

## 📈 Future Improvements

* Add unit tests (Jest)
* Add optimized stack-based solution for histogram
* Convert to fully modular architecture
* Add visualization for algorithms
* Add LeetCode problem links

---

## 👨‍💻 Author

**Hussein Hamdan**

* GitHub: [https://github.com/hussein-hamdan](https://github.com/hussein-hamdan)

---

## ⭐ Purpose

This project is built for:

* Interview preparation
* Strengthening DSA fundamentals
* Practicing TypeScript
* Writing clean, scalable code
"""