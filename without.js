const eqArrays = function(array1,array2) {
  
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] != array2[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

const withOut = function(source, itemsToRemove) {
  let newArray = [source];
  for (let i = 0; i <= newArray.length; i++) {
    for (value of itemsToRemove) {
      if (source[i] === value) {
        let removedItem = newArray.indexOf(value);
        newArray.splice(removedItem, 1);
      }
    }
  }
  return newArray;
};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

    
    
    
   








const assertArraysEqual = function(array1,array2) {
  let actual = eqArrays(array1,array2);

  if (actual) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
};