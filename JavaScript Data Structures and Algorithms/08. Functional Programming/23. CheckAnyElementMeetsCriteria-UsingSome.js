// Use the "some" Method to Check that Any Elements in an Array Meet a Criteria

function checkPositive(arr) {
  return arr.some((item) => item > 0);
}
checkPositive([1, 2, 3, -4, 5]);
