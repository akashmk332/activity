document.write("Q5. Find duplicates in an array:" + "<br><br>");

function findDuplicates(arrDup, len) {
  // initialize ifPresent as false
  let ifPresent = false;

  // ArrayList to store the output
  let al = new Array();

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arrDup[i] == arrDup[j]) {
        // checking if element is
        // present in the ArrayList
        // or not if present then break
        if (al.includes(arrDup[i])) {
          break;
        }

        // if element is not present in the
        // ArrayList then add it to ArrayList
        // and make ifPresent at true
        else {
          al.push(arrDup[i]);
          ifPresent = true;
        }
      }
    }
  }

  // if duplicates is present
  // then print ArrayList

  if (ifPresent == true) {
    document.write(`[${al}]`);
  } else {
    document.write("No duplicates present in arrays");
  }
}
// Driver Code
let arrDup = [12, 11, 40, 12, 5, 6, 5, 12, 11];
let m = arrDup.length;

document.write("Elements in an array:" + arrDup + "<br><br>");
document.write("Duplicate elements in an array:");
findDuplicates(arrDup, m);
