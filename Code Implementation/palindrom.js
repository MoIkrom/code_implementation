const palindrom = (string) => {
  // validasi
  if (typeof string !== "string") return "Masukkan Huruf Saja !";

  // proses
  let hasil = "";
  for (let i = string.length - 1; i >= 0; i--) {
    hasil += string[i];
  }
  return hasil === string ? "Palindrom" : "Bukan Palindrom";
};

console.log(palindrom("sepatu"));
console.log(palindrom("kasur rusak"));
