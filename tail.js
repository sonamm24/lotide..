const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}] `);
  }
  
};

const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0], "Lighthouse"); // => will always fail!

  
// TEST CODE
  







