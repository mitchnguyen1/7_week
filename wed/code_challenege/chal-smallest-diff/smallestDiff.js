// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96] //return 23-20=3

//[10,20,30]
//[17,15] //return 20-17=3

//function to find the smallest sum
//Runtime Complexity: o(n^2)-nested for loop, for each iteration through the first array, theres one full iteration through the second array
//Space Complexity: O(1)-constant since theres no new array being made, only fixed variables being used. (integers)
const smallestSum = (num1, num2) => {
  //set max integer
  let sum = Number.MAX_SAFE_INTEGER;
  //nested for loop
  //iterate through the first array(num1)
  for (let i = 0; i < num1.length; i++) {
    //iterate through the second array(num2)
    for (let j = 0; j < num2.length; j++) {
      //find the difference of each number of the first array minus each of the second
      let diff = num1[i] - num2[j];
      //if the difference is lower than the current and not a negative or 0
      if (diff < sum && diff > 0) {
        sum = diff;
      }
    }
  }
  return sum;
};
//compare the first answer with the second and return the lowest
const smallestDiff = (arr1, arr2) =>
  smallestSum(arr1, arr2) < smallestSum(arr2, arr1)
    ? smallestSum(arr1, arr2)
    : smallestSum(arr2, arr1);

let one = [10, 20, 14, 16, 18];
let two = [30, 23, 54, 33, 96]; //return 23-20=3

let three = [10, 20, 30];
let four = [17, 15, 30]; //return 20-17=3

console.log(smallestDiff(one, two));
console.log(smallestDiff(three, four));

//sort both arrays
//define index for both arrays, sum
//while index < arr.length
//define diff
//if diff < sum && diff > 0
//sum = diff
//if sum == null
//sum = diff
//if diff > sum
//index1++
//else
//index2++

//Runtime Complexity: O(n log n) since the sorting array takes the longest
//Space Complexity: O(1) constant since we're not creating a new array
const smallest = (arr1, arr2) => {
  //define the index and sum starting at the max
  let index1 = 0;
  let index2 = 0;
  let sum = Number.MAX_SAFE_INTEGER;
  //sort both arrays
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  //loop while either index reaches the end
  while (index1 < arr1.length && index2 < arr2.length) {
    //define difference with both arrays either way
    const diff = arr2[index2] - arr1[index1];
    const diff2 = arr1[index1] - arr2[index2];

    //assign sum to the lowest difference
    if (diff < sum && diff > 0) {
      sum = diff;
    }
    if (diff2 < sum && diff2 > 0) {
      sum = diff2;
    }

    //increment index based on value
    if (arr1[index1] < arr2[index2]) {
      index1++;
    } else {
      index2++;
    }
  }
  return sum;
};

console.log(smallest(one, two));

