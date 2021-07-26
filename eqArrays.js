//const assertEqual = function(actual, expected) {
  //if (actual === expected) {
    //console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  //} else {
    //console.log(`Assertion Failed: [${actual}] !== [${expected}] `);
  //}
  
//};
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = function(array1,array2) {
  
  if (array1.length === array2.length) {
    for (let i =0 ; i<array1.length; i++){
        if (array1[i] != array2[i]){
            return false;
        }
    }
    return true;
  }

  return false;

};

module . exports = eqArrays;

//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

//console.log(eqArrays([1, 2], [1, 2, 3])); // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

  
  
  
  
  