const assert  = require('chai').assert;
const tail = require("../tail");

describe ('#tail', () => {
  it ("returns 3 for [1,2,3]", () => {
    assert.strictEqual(tail([1,2,3]),3);
  });
});


//it("returns 1 for [1,2,3]", () => {
  //assert.strictEqual(head([1,2,3]),1);
//});

// it("returns '5' for ['5']", () => {
//   assert.strictEqual(head(['5']), '5'); 
// });




// });








//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result.length,2);
//assertEqual(result[0], "Hello"); // => will always fail!
//assertEqual(result[1], "Lighthouse");
//assertEqual(result[2], "Labs");