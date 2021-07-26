const tail = require("../tail");
const assertEqual = require('../assertEqual');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0], "Hello"); // => will always fail!
assertEqual(result[1], "Lighthouse");
assertEqual(result[2], "Labs");