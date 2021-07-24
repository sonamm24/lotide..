const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    } else {
        console.log(`Assertion Failed: [${actual}] !== [${expected}] `);
    }
};

const countLetters = function (sentence){
    let result = {};
    //('LIGHTHOUSE')
    
    for(letter1 in sentence){ //take a letter from the sentence
        //check if letter has already been counted
            //if letter has not been counted then go to step 1
            //if letter has been counted go to next letter and then go to step 1
        if(!(letter1 in result)){
            //count all matching letters in the sentence
            let counter=0;
            for(letter2 in sentence){ //take another letter from the sentence
                //if new letter matches the letter being counted
                    //increment the counter
                    
                if (sentence[letter1] === sentence[letter2]){
                    counter+=1;
                }

                //go to the next letter and go to step 1
            }

            //add count to letter count total
            result[sentence[letter1]]=counter;
        }//end if
    } //go to next letter

    return result;
}

console.log(countLetters('LIGHTHOUSE'));
console.log(countLetters('AAPPPLE'));