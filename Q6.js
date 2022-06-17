document.write(
  "Q6. Find the Kth largest and Kth smallest number in an array:" + "<br><br>"
);

// Simple Javascript program to find k'th smallest and largest element

// Function to return k'th smallest element in a given array

function kthSmallest(arrSL, e, z) {
  // Sort the given array
  arrSL.sort((a, b) => a - b);

  // Return k'th element in the sorted array
  return arrSL[z - 1];
}

function kthLargest(arrSL, e, z) {
  // Sort the given array
  arrSL.sort((a, b) => a + b);

  // Return k'th element in the sorted array
  return arrSL[z + 1];
}

// Driver program to test above methods
let arrSL = [12, 3, 5, 7, 19];
let e = arrSL.length,
  z = 1;
document.write("The array elements are:" + arrSL + "<br><br>");
document.write("The value of an K is:" + z + "<br><br>");
document.write(
  +z + "'th smallest element is " + kthSmallest(arrSL, e, z) + "<br><br>"
);
document.write(+z + "'th Largest element is " + kthLargest(arrSL, e, z));
