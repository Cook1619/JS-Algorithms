// ! Frequency Patterns

// * This pattern uses objects or sets to collect values/frequencies of values
// * This can often avoid the need for nested loops of O(N^2) operations with arrays/strings

// EXAMPLE
// ? Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

// Brute force solutioon
function same(arr1, arr2) {
  // if the 2 arrays have different lengths it will be false immediatly, no reason to do anything else
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // this removes a value from the second array to keep track of what has been accounted for
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// same([1,2,3], [4,1,9]) // true
// same([1,2,3],[1,9])  //false
// same([1,2,1],[4,4,1]) // false (must be same frequency)

// Refactored
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// same2([1,2,3], [4,1,9]) // true
// same2([1,2,3],[1,9])  //false
// same2([1,2,1],[4,4,1]) // false (must be same frequency)