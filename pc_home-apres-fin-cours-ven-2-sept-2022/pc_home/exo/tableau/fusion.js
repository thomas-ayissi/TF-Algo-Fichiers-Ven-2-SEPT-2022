"use strict";

function sortArrayInPlace(table) {
  for (let left = 0; left < table.length - 1; left++) {
    for (let right = left + 1; right < table.length; right++) {
      if (table[right] < table[left]) {
        const temp = table[left];
        table[left] = table[right];
        table[right] = temp;
      }
    }
  }
}

const tab1 = [5, 5, 1, 89, 1, 3, 1, 2, 35, 9, 4, 8];
const tab2 = [7, 6, 50, 6, 20, 4];

console.log("tab1", tab1);
console.log("tab2", tab2);

const len1 = tab1.length;
const len2 = tab2.length;

sortArrayInPlace(tab1);
sortArrayInPlace(tab2);

console.log("tab1", tab1);
console.log("tab2", tab2);

const sortedMergeResult = []; // Array(tab1.length + tab2.length)

let i1 = 0,
  i2 = 0,
  iResult = 0;

while (i1 < len1 && i2 < len2) {
  console.log("start:", "i1", i1, "i2", i2, "iResult", iResult);

  if (tab1[i1] < tab2[i2]) {

    sortedMergeResult[iResult++] = tab1[i1++];
  } else {

    sortedMergeResult[iResult++] = tab2[i2++];
  }
}

while (i1 < len1) {

  sortedMergeResult[iResult++] = tab1[i1++];
}

while (i2 < len2) {
  sortedMergeResult[iResult++] = tab2[i2++];
}

console.log("sortedMergeResult", sortedMergeResult);
