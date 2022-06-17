document.write(
  "Q7. Move all the negative elements to one side of the array:" + "<br><br>"
);

// JavaScript Code for the same approach

function move(arrNeg) {
  arrNeg.sort();
}

// driver code

let arrNeg = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
document.write(" The array elements are:" + arrNeg + "<br><br>");
move(arrNeg);
document.write(
  "Output of the negetive elements of an array in oneside:" + "\n"
);
for (let h of arrNeg) document.write(h, " ");
