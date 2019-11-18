const n = 7;
const ar = [1,2,1,2,1,3,2];
let count = 0;
const unique = [...new Set(ar)];
const customAr = [];
if (unique) {
  for (let i = 0; i < unique.length; i++) {
    const qty = ar.reduce((prev, next) => prev + (next === unique[i]), 0);
    customAr.push(qty);
  }
}

if (customAr) {
  customAr.forEach(item => {
    for (let c = 1; c <= item; c++) {
      if (c % 2 === 0) {
        count++;
      }
    }
  });
}

