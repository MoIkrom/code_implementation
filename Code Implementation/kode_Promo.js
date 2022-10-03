const FazzFood = (harga, voucher, jarak, pajak) => {
  // validasi
  if (typeof (harga && jarak) !== "number") return "Input harga / jarak harus berupa number";
  if (typeof voucher !== "string" && voucher !== null) return "Voucher invalid";
  if (typeof pajak !== "boolean") return "Input Pajak harus berupa boolean";
  // ------------------------------------------------------------------------
  // Diskon
  const cekDiskon = () => {
    if (voucher === "FAZZFOOD50") {
      if (harga >= 50000) {
        cekPotongan = harga * 0.5;
        if (cekPotongan > 50000) return 50000;
        return cekPotongan;
      }
    }

    if (voucher === "DITRAKTIR60") {
      if (harga >= 25000) {
        cekPotongan = harga * 0.6;
        if (cekPotongan > 30000) return 30000;
        return cekPotongan;
      }
    }
    return "--- Voucher tidak Berlaku ! ---";
  };
  const diskon = cekDiskon();

  // ------------------------------------------------------------------------
  // Biaya Ongkir
  const cekJarak = () => {
    if (jarak <= 2) return (ongkir = 5000);
    return (ongkir = (jarak - 2) * 3000 + 5000);
  };
  const ongkos = cekJarak();
  // ------------------------------------------------------------------------
  // Pajak
  const cekPajak = () => {
    if (pajak === true) return (biayaPajak = harga * 0.05);
    return (biayaPajak = 0);
  };
  const totalPajak = cekPajak();
  // ------------------------------------------------------------------------
  const cekSubTotal = () => {
    if (typeof diskon !== "number") return (total = harga + ongkos + totalPajak);
    return (total = harga - diskon + ongkos + totalPajak);
  };
  const subTotal = cekSubTotal();
  // ------------------------------------------------------------------------
  console.log("Total pembayaran Kamu Adalah : ");
  console.log("----------------------------- ");
  console.log(`Harga           :  ${"Rp "}  ${harga}`);
  console.log(`Potongan        :  ${"Rp "}  ${diskon}`);
  console.log(`Biaya Antar     :  ${"Rp "}  ${ongkos}`);
  console.log(`Pajak           :  ${"Rp "}  ${totalPajak}`);
  console.log("============================");
  console.log(`Sub Total       :  ${"Rp "}  ${subTotal}`);
};

console.log("Contoh 1 ");
console.log("---------------------------- ");
FazzFood(75000, "FAZZFOOD50", 5, true); // Berhasil pakai voucher "FAZZFOOD50"
console.log("---------------------------- ");
// // .
// // .
// // .

// console.log("Contoh 2 ");
// console.log("----------------------------- ");
// FazzFood(34000, "DITRAKTIR60", 5, true); // Berhasil pakai voucher "DITRAKTIR60"
// console.log("---------------------------- ");
// // // .
// // .
// // // .
// console.log("Contoh 3 ");
// console.log("---------------------------- ");
// FazzFood(15000, "FAZZFOOD50", 2, false); // Gagal, harga <50rb & no pajak
// console.log("---------------------------- ");
// // // .
// // // .
// // .

// console.log("Contoh 4 ");
// console.log("----------------------------- ");
// FazzFood(34000, "DITRAKTIR620", 1, true); // Gagal,voucher Typo
// console.log("---------------------------- ");
// .
// .
// .
