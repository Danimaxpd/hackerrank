"use strict";
const n = 12;
const s = "DDUUDDUDUUUD";


function countingValleys(n, s) {
  let arr = s.split("");
  let c = 0;
  let l = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == "U") {
			l++;
    } else if (arr[i] == "D") {
			l--;
      if (l == -1) {
        c++;
      }
    }
  }
  return c;
}

console.log(countingValleys(n, s));
