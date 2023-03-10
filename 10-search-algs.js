// ! Searching Algorithms

/*  
  * Linear Search JS methods on arrays
    - indexOf returns the index if found otherwise -1
    - includes returns true if in array, otherwise false
    - find 
    - findIndex
*/

// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
// O(n), it grows as the array grows
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// console.log("returned value", linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));

// ! Binary Search
/*
   - If the data is sorted, we can do a different search method that is faster, Binary Search
   - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at one time
   - It's all about picking the halfway point of an array and repeatedly doing that until your condition is met
   - All about the divide and conquer technique
*/

/* 
  - This function accepts a sorted array and a value
  - Create a left pointer at the start of the array, and a right point at the end of the array
  - While the left pointer comes before right pointer:
   - Create a pointer to middle
   - If you find a value you want, return the index
   - If the value is too small, move the left pointer up
   - If the value is to large, move the right pointer down
  - If you never find the value return -1
*/
// O(log n)
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

/*
  - Creating a function which takes in 2 strings, one being the longer string, the second being the pattern were searching for
  - Loop over the longer string
  - Loop over the shorter string
  - If the characters don't match, break out of the inner loop
  - If the characters do match, keep going
  - If you complete the inner loop and find a match, increment the count of matches
  - Return count 
*/
function stringSearch(long, short) {
  let count = 0;
  // We do 2 loops, one outer loop going over the long string were looking for a match, second one looping over the string were trying to find a match for
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // So these conditionals are a little tricky, but this can be thought of as looking ahead in the long string
      // So were never checking for a match, we just handle for other cases (short[j] === long[i])
      // What we care about is if there isn't a match we break out of the inner loop
      // If j has reached the end of the short string we know we have a match and to increment the counter
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("thiswillbeabigwill", "will"));
