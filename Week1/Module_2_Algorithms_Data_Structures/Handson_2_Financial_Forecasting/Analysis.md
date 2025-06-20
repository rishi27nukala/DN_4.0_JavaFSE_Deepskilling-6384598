# Analysis

The recursive algorithm implemented for financial forecasting uses this recurrence:
FutureValue(n) = FutureValue(n - 1) * (1 + growthrate)
- **Time Complexity:** O(n)  
  The function makes one recursive call for each year until it reaches the base case (`n == 0`).

- **Space Complexity:** O(n)  
  Each recursive call is added to the **call stack**, consuming memory for each level of recursion.

## Issues
- For large `n`, recursion may cause a **stack overflow error** due to deep call stacks.
- Recursive calls repeat calculations and consume more memory compared to iterative solutions.

## Optimization Techniques

### 1. **Iterative Approach**
The same logic can be implemented using a loop, which reduces both time and space overhead.
### 2. **Memoization**
If there are overlapping subproblems then we Store results of previous computations in a map or array to avoid recalculating.

- The recursive solution is elegant and works well for small inputs.

- For production or large datasets, converting to an iterative method is efficient to avoid stack overflow and ensure better efficiency
