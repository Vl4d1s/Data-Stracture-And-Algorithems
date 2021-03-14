const strings = ["a", "b", "c", "d"];

strings.push("e"); // add item to the end of the array - O(1)
strings.pop(); // remove the last item from the array - O(1)
strings.unshift("x"); // add item to the head of the array - O(n) becouse we shifting the indexes right
strings.splice(2, 1, "alien"); // O(n)

console.log(strings);

// C++:
// int a[20];
// int b[5] = {1,2,3,4,5};

