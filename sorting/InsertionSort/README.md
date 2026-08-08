# Insertion Sort


## 1. Compile TypeScript

Compile the TypeScript file into JavaScript:

```bash
tsc index.ts
```

## 2. Run the js code

Run the generated JavaScript file using Node.js:

```bash
node index.js
```

## What is Insertion Sort?

Insertion Sort is a simple sorting algorithm that builds the sorted array **one element at a time**.

It works similarly to how we arrange playing cards in our hand.

For example:

    [5, 3, 8, 4, 2]

The goal is to arrange the numbers in ascending order:

    [2, 3, 4, 5, 8]

Insertion Sort takes one element at a time and places it in its correct position among the elements that are already sorted.

---

## How Does Insertion Sort Work?

Insertion Sort divides the array into two parts:

1. **Sorted portion**
2. **Unsorted portion**

Initially, the first element is considered sorted.

    [5] [3, 8, 4, 2]
     ↑        ↑
    Sorted  Unsorted

Take `3` from the unsorted portion and insert it into the correct position:

    [3, 5] [8, 4, 2]

Take `8`:

    [3, 5, 8] [4, 2]

Take `4` and insert it into the correct position:

    [3, 4, 5, 8] [2]

Finally, take `2`:

    [2, 3, 4, 5, 8]

The complete array is now sorted.

---

## Example

Consider the following array:

    [5, 3, 8, 4, 2]

We want to sort it in ascending order.

### Step 1

The first element `5` is considered sorted.

    [5] [3, 8, 4, 2]

---

### Step 2

Take `3`.

Compare `3` with `5`.

    3 < 5

Move `5` to the right and insert `3` before it:

    [3, 5] [8, 4, 2]

Now the sorted portion is:

    [3, 5]

---

### Step 3

Take `8`.

Compare `8` with `5`.

    8 > 5

No shifting is required:

    [3, 5, 8] [4, 2]

The sorted portion is now:

    [3, 5, 8]

---

### Step 4

Take `4`.

Compare `4` with `8`.

    4 < 8

Move `8` to the right:

    [3, 5, _, 8, 2]

Compare `4` with `5`.

    4 < 5

Move `5` to the right:

    [3, _, 5, 8, 2]

Compare `4` with `3`.

    4 > 3

Insert `4` after `3`:

    [3, 4, 5, 8, 2]

The sorted portion is now:

    [3, 4, 5, 8]

---

### Step 5

Take `2`.

Compare `2` with `8`.

    2 < 8

Move `8`:

    [3, 4, 5, _, 8]

Compare `2` with `5`.

    2 < 5

Move `5`:

    [3, 4, _, 5, 8]

Compare `2` with `4`.

    2 < 4

Move `4`:

    [3, _, 4, 5, 8]

Compare `2` with `3`.

    2 < 3

Move `3`:

    [_, 3, 4, 5, 8]

Insert `2` at the beginning:

    [2, 3, 4, 5, 8]

The array is now completely sorted.

---

## Visual Representation

The complete process can be visualized as:

    Initial

    [5, 3, 8, 4, 2]


    Step 1

    [5] [3, 8, 4, 2]
     ↑
    Sorted


    Step 2

    [3, 5] [8, 4, 2]
     ↑────↑
      Sorted


    Step 3

    [3, 5, 8] [4, 2]
     ↑────────↑
        Sorted


    Step 4

    [3, 4, 5, 8] [2]
     ↑────────────↑
          Sorted


    Step 5

    [2, 3, 4, 5, 8]
     ↑───────────────↑
           Sorted

---

## Important Concept

The most important concept in Insertion Sort is:

> **Take one element from the unsorted portion and insert it into its correct position in the sorted portion.**

For example:

    Sorted portion     Current element

    [3, 5, 8]                 4

The `4` needs to be inserted between `3` and `5`:

    [3, 4, 5, 8]

To make space for `4`, larger elements are shifted to the right.

    Before:

    [3, 5, 8, 4]

    After shifting:

    [3, 5, _, 8]

    After inserting:

    [3, 4, 5, 8]

---

## Insertion Sort vs Bubble Sort

Both algorithms can sort an array, but they work differently.

### Bubble Sort

Bubble Sort repeatedly compares **adjacent elements** and swaps them when they are in the wrong order.

    [5, 3, 8, 4, 2]

    Compare → Swap → Compare → Swap → ...

The largest element gradually moves toward the end.

### Insertion Sort

Insertion Sort takes one element and inserts it into the correct position within the already sorted portion.

    [3, 5, 8] + [4]

             ↓

    [3, 4, 5, 8]

The key difference is:

    Bubble Sort
    → Compare and swap adjacent elements

    Insertion Sort
    → Take an element and insert it into the sorted portion

---

## Ascending Order

For ascending order, smaller values should come before larger values.

Example:

    [5, 3, 8, 4, 2]

             ↓

    [2, 3, 4, 5, 8]

The current element is compared with elements in the sorted portion.

If the current element is smaller, larger elements are shifted to the right.

    Current element < Previous element
              ↓
         Shift right
              ↓
     Insert current element

---

## Descending Order

Insertion Sort can also arrange elements in descending order.

Example:

    [5, 3, 8, 4, 2]

             ↓

    [8, 5, 4, 3, 2]

For descending order, the comparison logic is reversed.

The larger values are placed before smaller values.

---

## Time Complexity

| Case | Time Complexity |
|---|---|
| Best Case | O(n) |
| Average Case | O(n²) |
| Worst Case | O(n²) |

### Best Case

The best case occurs when the array is already sorted.

    [1, 2, 3, 4, 5]

Very little work is required because each element is already in the correct position.

    O(n)

### Average Case

When the elements are in a random order:

    [5, 3, 8, 4, 2]

Insertion Sort may need to compare and shift several elements.

    O(n²)

### Worst Case

The worst case occurs when the array is sorted in the opposite direction.

For ascending sorting:

    [5, 4, 3, 2, 1]

Almost every element needs to be moved.

    O(n²)

---

## Space Complexity

    O(1)

Insertion Sort is an **in-place sorting algorithm**.

It does not require an additional array proportional to the input size.

---

## Advantages

- Easy to understand.
- Easy to implement.
- Requires very little additional memory.
- Efficient for small datasets.
- Efficient when the array is already mostly sorted.
- Works well when elements are added one at a time.
- It is an in-place sorting algorithm.

---

## Disadvantages

- Slow for large datasets.
- Average and worst-case time complexity is O(n²).
- Not suitable for large, randomly ordered datasets compared with more efficient algorithms.

---

## When Should You Use Insertion Sort?

Insertion Sort is useful when:

- The dataset is small.
- The data is already mostly sorted.
- You need an in-place sorting algorithm.
- New elements are continuously being added to an already sorted collection.
- You are learning sorting algorithms and their concepts.

For large datasets, algorithms such as **Merge Sort**, **Quick Sort**, or other optimized sorting algorithms are generally preferred.

---

## Compile and Run

### 1. Compile TypeScript

Compile the TypeScript file into JavaScript:

```bash
tsc index.ts