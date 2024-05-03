const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const newFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});
console.log(newFruits);
const filter = fruits.filter((f) => {
  // check if the fruit does not ends with 'erry'
  return !f.endsWith("erry");
});
console.log(filter);
