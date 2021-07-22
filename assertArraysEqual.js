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

const assertArraysEqual = function (array1,array2){
    let actual = eqArrays(array1,array2);

    if (actual) {
        console.log(`Assertion Passed`);
    } else {
        console.log(`Assertion Failed`);
    }
};
