let n = 5;
let star = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    star=star + '*'
  }
  star=star + "\n";
}
// for (let i = 1; i < n; i++) {
//     for (let k = 0; k < n - i; k++) {
//         star=star + '*'
//     }
//     star=star + "\n";
// }
console.log(star);


