# Understanding Asymptotic Notation

Asymptotic notation provides a way to describe how an algorithm's performance (time or space) scales with input size.

The most common notations:
- **Big O** → Worst-case scenario
- **Omega** → Best-case scenario
- **Theta** → Average-case scenario

## Big O Notation

- **Big O** represents the **upper bound** of time complexity.
- It helps in comparing algorithms independently of hardware or exact timing.
- It shows how performance degrades with increased input size.

Understanding Big O helps in:
- Choosing efficient algorithms
- Writing scalable code
- Estimating performance for large inputs
  
## Search Operations Time Complexity

| Algorithm       | Best Case     | Average Case     | Worst Case      |
|----------------|----------------|------------------|-----------------|
| Linear Search         | O(1)           | O(n)             | O(n)            |
| Binary Search   | O(1)           | O(log n)         | O(log n)        |
