# Bubble Sort

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


## What is Bubble Sort?

Bubble Sort is a simple sorting algorithm used to arrange elements in a particular order.

For example, if we have:

[5, 3, 8, 4, 2]

The goal is to arrange the numbers in ascending order:

[2, 3, 4, 5, 8]

Bubble Sort works by repeatedly comparing **two adjacent elements** and swapping them when they are in the wrong order.

---

## How Does Bubble Sort Work?

Bubble Sort compares each element with the element next to it.

For ascending order:

- If the left element is greater than the right element, swap them.
- If the left element is smaller than the right element, leave them as they are.
- Continue this process until the end of the array.
- After each complete pass, the largest unsorted element moves to the end.

This is why it is called **Bubble Sort** — larger elements gradually "bubble up" to the end.

---

## Example

Consider the following array:

[5, 3, 8, 4, 2]

We want to sort it in ascending order.

### Pass 1

Compare `5` and `3`:

[5, 3, 8, 4, 2]

Since `5 > 3`, swap them:

[3, 5, 8, 4, 2]

Compare `5` and `8`:

[3, 5, 8, 4, 2]

Since `5 < 8`, no swap:

[3, 5, 8, 4, 2]

Compare `8` and `4`:

[3, 5, 8, 4, 2]

Since `8 > 4`, swap them:

[3, 5, 4, 8, 2]

Compare `8` and `2`:

[3, 5, 4, 8, 2]

Since `8 > 2`, swap them:

[3, 5, 4, 2, 8]

After the first pass:

[3, 5, 4, 2, 8]

The largest element `8` is now in its correct position.

---

## Pass 2

Start again from the beginning.

[3, 5, 4, 2, 8]

Compare `3` and `5`:

[3, 5, 4, 2, 8]

No swap is required.

Compare `5` and `4`:

[3, 5, 4, 2, 8]

Since `5 > 4`, swap:

[3, 4, 5, 2, 8]

Compare `5` and `2`:

[3, 4, 5, 2, 8]

Since `5 > 2`, swap:

[3, 4, 2, 5, 8]

After the second pass:

[3, 4, 2, 5, 8]

Now `5` and `8` are in their correct positions.

---

## Pass 3

Start again:

[3, 4, 2, 5, 8]

Compare `3` and `4`:

[3, 4, 2, 5, 8]

No swap.

Compare `4` and `2`:

[3, 4, 2, 5, 8]

Since `4 > 2`, swap:

[3, 2, 4, 5, 8]

The array is getting closer to being sorted.

---

## Pass 4

Compare `3` and `2`:

[3, 2, 4, 5, 8]

Since `3 > 2`, swap:

[2, 3, 4, 5, 8]

Now the array is completely sorted.

---

## Final Result

The original array:

[5, 3, 8, 4, 2]

Becomes:

[2, 3, 4, 5, 8]

---

## Visual Representation

The sorting process can be summarized as:

```text
Initial
[5, 3, 8, 4, 2]

Pass 1
[3, 5, 4, 2, 8]
               ↑
          Largest element

Pass 2
[3, 4, 2, 5, 8]
            ↑  ↑
         Sorted

Pass 3
[3, 2, 4, 5, 8]
         ↑  ↑  ↑
       Sorted

Pass 4
[2, 3, 4, 5, 8]
 ↑  ↑  ↑  ↑  ↑
    Sorted