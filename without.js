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
  let result = [];
  let inList = false;

  for (value1 of source) {
    
    for (value2 of itemsToRemove) { //loop through all the values in the itemsToRemove list
      
      if (value1 === value2) { //check if the current value1 equal to current value2
        inList = true; //set flag to true to indicate that value1 was found in the list itemsToRemove
      }//end if

    }//end for

    if (inList === false) { //check did we find value1 in the list itemsToRemove
      result.push(value1); //add
    }

    inList = false; //reset flag
  }
  return result;
};

console.log(withOut([1, 2, 3], [1])); // => [2, 3]
console.log(withOut(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const assertArraysEqual = function(array1,array2) {
  let actual = eqArrays(array1,array2);

  if (actual) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
};