// Drop it :

/* 
* Given the array arr, iterate through and remove each element starting from the first 
  element (the 0 index) until the function func returns true when the iterated element is passed through it. */

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}
