function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}
/* 
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
  if so, return true
  save the current number as the key on our object so we can check it later against other numbers
  if we reach the end of the array, return false
*/

/*
  This code first initializes an empty set
  it then iterates through the elements of the given array and 
  creates a complement number by subtracting the current number in the 
  iteration with the target number.
  it then checks if the complementary number is in the set
  and returns true if that condition is met
  if not it adds the complement number to the set 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
