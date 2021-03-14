// Create a function that reverse a string:
// 'Vladis' => 'sidalV'

function reverse(str) {
  let size = parseInt(str.length / 2);
  let arrStr = [];

  for (let j = 0; j < size; j++) {
    arrStr[j] = str[j];
  }

  for (let i = 0; i < size; i++) {
    arrStr[i] = str[str.length - 1 - i];
    arrStr[str.length - 1 - i] = str[i];
  }

  return arrStr.join(""); // we can also use toString
}

function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backward = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backward.push(str[i]);
  }

  return backward.join("");
}

function reverse3(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  return str.split("").reverse().join("");
}

const reverse4 = (str) => [...str].reverse().join("");

console.log(reverse3("Vladis"));
