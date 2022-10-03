const divideAndSort = (num) => {
  if (typeof num !== "number") return "Harap Masukkan Angka Saja !";

  return num
    .toString() // 5956560159466056
    .split("0") // [ '595656', '159466', '56' ]
    .map((el) => el.split("").sort().join("")) // [ '555669', '145669', '56' ]
    .join("");
};

console.log(divideAndSort(5956560159466056));
// console.log(divideAndSort("lima dua satu"));
