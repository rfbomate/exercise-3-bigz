# Exercise 3: The Big Z

Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in zigzag order.

Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.

Sample Input:
array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
]

Sample Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


# Installation instructions

The first thing to do is to install the necessary packages and dependencies. To perform this task, the following command must be executed:

```bash
npm i
```

# Instructions for run the app
To run the application, execute the following command:

```bash
npm run dev
```

# Instructions for run the tests
To run the tests sets, execute the following command:
To run the application, execute the following command:

```bash
npm run test
```
I have used JEST to do the unit tests.

To validate the solution, I have implemented these test cases: 

1. Creating an instance of BigZ class
2. All rows do not have the same number of elements
3. Exercise test case
4. Test with none-square matrix and N-dimention < M-dimention
5. Test with none-square matrix and N-dimention > M-dimention
6. Test with 2x2 square matrix
7. Test with 1x1 square matrix
8. Test with empty matrix
