const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}] `);
    return false;
  }
  
};
const eqObjects = function(Object1, Object2) {
  if (Object.keys(Object1).length !== Object.keys(Object2).length) {
    return false;

  } else {

      
    for (let key of Object.keys(Object1)) {
       
      if ((Array.isArray(Object1[key]) && (Object2[key] === false))) {
        return false;
      }
    }
    for (const key in Object2) {
   
      if (!assertEqual(Object1[key], Object2[key])) {
        return false;
      }

    }
    return true;
  }
};

let ab = { a: 1, b: "2" };
let ba = { b: "2", a: 1 };
console.log(eqObjects(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

ab = { a: '1', b: 2 };
ba = { b: 2, a: '1' };
console.log(eqObjects(ab, ba));