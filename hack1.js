/* compare two objects to determine if the first one
 contains equivalent property values to the second one. */

const matches = (obj,source) =>
 Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);


let source = { age: 25, hair: 'long', beard: true };
let target = { hair: 'long', beard: true };

console.log(matches(source,target));