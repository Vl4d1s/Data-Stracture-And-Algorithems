const {performance} = require('perf_hooks');

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'darla','nemo','gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

const lage = new Array(1000).fill('nemo');

function findNemo(array){
  for(let i=0; i< array.length; i++){
    if(array[i] === 'nemo'){
      console.log('Found NEMO!');
    }
  }
}

findNemo(lage); // --> Linear Time

const boxes = [0,1,2,3,4,5]

function logFirstTowBoxes(boxes){
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTowBoxes(boxes) // O(2)