// witch one get repeat first
// [2,5,1,2,3,5,1,2,4] => return 2
// [1,1,1,1,1,1,1,1,1]
// [2,1,1,2,3,5,1,2,4] => return 1
// [2,3,4,5] => return undefined

function firstRecurringCharacter(input) {
  const check = {};
  for (let i = 0; i < input.length; i++) {
    console.log(check);
    if (check[input[i]] !== undefined) {
      // critical to not do it like: if (!check[input[i]])
      return input[i];
    } else {
      check[input[i]] = i;
    }
  }

  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
