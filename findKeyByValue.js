const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}] `);
  }
  
};




const findKeyByValue =  function(object, givenValue) {
  for (const key in object) {

    if (givenValue === object[key]){
        return key;
    }
    
  }

  return undefined;
};

const bestTVShowsByGenre = ["The Expanse" , "Brooklyn Nine-Nine", "The Wire"];

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
      
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
      
