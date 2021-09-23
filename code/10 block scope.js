{
}
if (true) true; //one statement is expected

var a = 100; //Variable will be shadowed by the same variable in the block scope
console.log(a);

let b = 200; //let is not shadowed
console.log(b);

{
  var a = 10; //Defined in global scope
  let b = 20; //Defined in block scope
  const c = 30; //Defined in block scope
  console.log(a);
  console.log(b);
  console.log(c);
} //After this line (Block scope is no more accessible)

console.log(a); //Can be accessed globally // Shadowed
console.log(b); //cannot
console.log(c); //cannot
