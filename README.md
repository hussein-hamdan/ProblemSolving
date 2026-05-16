# 🧠 Algorithm Problems in TypeScript

A clean and structured collection of classic algorithm problems implemented in **TypeScript**, designed for interview preparation and strengthening problem-solving skills.

This project follows a modular structure where each problem is implemented in a separate file for clarity, maintainability, and easy testing.

---

## 📌 Included Problems

| # | Problem | Topic |
|--|--------|------|
| 1 | Flood Fill | DFS / Graph |
| 2 | Trapping Rain Water | Two Pointers |
| 3 | Climbing Stairs | Dynamic Programming |
| 4 | Jump Game | Greedy |
| 5 | Rod Cutting | DP / Recursion |
| 6 | Largest Rectangle in Histogram | Stack |
| 7 | Maximum Rectangle in Binary Matrix | Matrix / Histogram |

---

## 📁 Project Structure

```text
src/
│
├── flood-fill.ts
├── totalAmountOfWater.ts
├── climbStairs.ts
├── canJump.ts
├── cutRod.ts
├── largestRectangleArea.ts
└── largestRectangleMatrix.ts
````

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
tsc floodFill.ts
```

This will generate a `.js` file.

---

### 2. Run with Node.js

```bash
node floodFill.js
```

---

## 🧪 Run Any Problem

### Flood Fill

```bash
tsc floodFill.ts && node floodFill.js
```

### Trapping Rain Water

```bash
tsc totalAmountOfWater.ts && node totalAmountOfWater.js
```

### Climbing Stairs

```bash
tsc climbStairs.ts && node climbStairs.js
```

### Jump Game

```bash
tsc canJump.ts && node canJump.js
```

### Rod Cutting

```bash
tsc cutRod.ts && node cutRod.js
```

### Largest Rectangle (Histogram)

```bash
tsc largestRectangleArea.ts && node largestRectangleArea.js
```

### Maximum Rectangle (Matrix)

```bash
tsc largestRectangleMatrix.ts && node largestRectangleMatrix.js
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

| Problem             | Time Complexity                | Space Complexity |
| ------------------- | ------------------------------ | ---------------- |
| Flood Fill          | O(R × C)                       | O(R × C)         |
| Trapping Rain Water | O(N)                           | O(1)             |
| Climbing Stairs     | O(N)                           | O(1)             |
| Jump Game           | O(N)                           | O(1)             |
| Rod Cutting         | O(N²)                          | O(N)             |
| Histogram           | O(N²) / O(N) optimized         | O(1) / O(N)      |
| Matrix Rectangle    | O(R² × C) / O(R × C) optimized | O(C)             |

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

---

```
```
