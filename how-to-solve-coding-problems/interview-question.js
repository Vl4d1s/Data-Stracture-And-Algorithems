// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

// the brute force solution
// O(a*b)
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

// O(a + b)
function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    // O(a)
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  // O(b)
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

const a = [1, 2, 3, 4];
const b = [5, 6, 7, 1];

console.log(containsCommonItem2(a, b));
