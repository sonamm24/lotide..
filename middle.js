const assertArraysEqual = function (array1,array2){
    let actual = eqArrays(array1,array2);

    if (actual) {
        console.log(`Assertion Passed`);
    } else {
        console.log(`Assertion Failed`);
    }
};

const middle = function(array) {

    let list = [] ;
    if (array.length < 3){
        return list;

    }
    if ( array.length % 2 === 0){
        let middle = array.length / 2;
        list.push(array[middle -1], array[middle])

        return list;
    }


    else{
           
            let middle = Math.floor(array.length/2);
            console.log(array[middle]);
            
            list.push(array[middle])
    
            return list;
        
    }
    
}

//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
















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