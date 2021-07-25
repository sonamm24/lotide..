const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback){
    const results = [];
    for (let item of array){
        results.push(callback(item));

    }
    
    return results;
  }
  
  const results1 = map(words, word => word[0]);
  console.log(results1);

  const assertArraysEqual = function (array1,array2){
    let actual = eqArrays(array1,array2);

    if (actual) {
        console.log(`Assertion Passed`);
    } else {
        console.log(`Assertion Failed`);
    }
};
 




