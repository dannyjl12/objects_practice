/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let keysArray = [];

  for (let keys in obj1) {
    let value = obj1[keys]
    if (keys === key) {
      keysArray.push(value)
    }
  }

  for (let keys2 in obj2) {
    let value2 = obj2[keys2]
    if (keys2 === key) {
      keysArray.push(value2)
    }
  }
  return keysArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
