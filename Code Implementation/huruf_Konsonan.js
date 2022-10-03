const ubahHuruf = (teks) => {
  // validasi
  if (typeof teks !== "string") return "Masukkan Huruf Saja !";

  // proses
  let hasil = " ";
  for (let i = 0; i < teks.length; i++) {
    if (teks[i] == "a") {
      hasil = hasil + "o";
    } else {
      hasil = hasil + teks[i];
    }
  }
  return hasil;
};

console.log(ubahHuruf("jakarta barat"));
