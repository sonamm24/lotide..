const letterPositions = function(sentence) {
    const result = {};
    for(letter1 in sentence){ //take a letter from the sentence
        //check if letter has already been counted
            //if letter has not been counted then go to step 1
            //if letter has been counted go to next letter and then go to step 1
        if(!(letter1 in result) && sentence[letter1]!=" "){
            //count all matching letters in the sentence
            let listofpositions=[];
            for(letter2 in sentence){ //take another letter from the sentence
                //if new letter matches the letter being counted
                    //increment the counter
                    
                if (sentence[letter1] === sentence[letter2]){
                    listofpositions.push(letter2);
                }

                //go to the next letter and go to step 1
            }

            //add count to letter count total
            result[sentence[letter1]]=listofpositions;
        }//end if
    } //go to next letter
    return result;
};

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


assertArraysEqual(letterPositions("hello").e, [1]);




