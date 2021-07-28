//step1
// convert the string into array making each word into an element in the array
//step 2
// for each word uppercase the first letter and lowwrcase the remaining letters
//step3
// convert array back into strings


const titleCase  = function(sentence) {
  // Your code in here ...
  if (sentence === "") {
    return "";
  }

  sentence = sentence.toLowerCase().split(' ');
  console.log(sentence);
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence [i].slice(1);
    console.log(sentence[i]);
  }
  return sentence.join(' ');
};

console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase("''"));
console.log(titleCase("A"));
