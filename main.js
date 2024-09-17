const harga1 = 165000;
const harga2 = 228000;
const harga3 = 260000;
const harga4 = 338000;
const harga5 = 670000;

const diskon = 150000;
const pemasangan = 250000;

const rp = "Rp ";
const bulan = "/bulan";

const tampilkanHarga1 = document.getElementById("price1");
const tampilkanHarga2 = document.getElementById("price2");
const tampilkanHarga3 = document.getElementById("price3");
const tampilkanHarga4 = document.getElementById("price4");
const tampilkanHarga5 = document.getElementById("price5");

const tampilkanPemasangan1 = document.getElementById("pemasangan1")
const tampilkanDiskon1 = document.getElementById("diskon1")
const tampilkanTotal1 = document.getElementById("total1")

const tampilkanPemasangan2 = document.getElementById("pemasangan2")
const tampilkanDiskon2 = document.getElementById("diskon2")
const tampilkanTotal2 = document.getElementById("total2")

const tampilkanPemasangan3 = document.getElementById("pemasangan3")
const tampilkanDiskon3 = document.getElementById("diskon3")
const tampilkanTotal3 = document.getElementById("total3")

const tampilkanPemasangan4 = document.getElementById("pemasangan4")
const tampilkanDiskon4 = document.getElementById("diskon4")
const tampilkanTotal4 = document.getElementById("total4")

const tampilkanPemasangan5 = document.getElementById("pemasangan5")
const tampilkanDiskon5 = document.getElementById("diskon5")
const tampilkanTotal5 = document.getElementById("total5")

const formatRupiah = (angka) => {
    return angka.toLocaleString("id-ID");
}

const total1 = pemasangan + harga1 - diskon;
const total2 = pemasangan + harga2 - diskon;
const total3 = pemasangan + harga3 - diskon;
const total4 = pemasangan + harga4 - diskon;
const total5 = pemasangan + harga5 - diskon;

tampilkanHarga1.textContent = rp + formatRupiah(harga1) + bulan;
tampilkanHarga2.textContent = rp + formatRupiah(harga2) + bulan;
tampilkanHarga3.textContent = rp + formatRupiah(harga3) + bulan;
tampilkanHarga4.textContent = rp + formatRupiah(harga4) + bulan;
tampilkanHarga5.textContent = rp + formatRupiah(harga5) + bulan;


tampilkanPemasangan1.innerHTML = `Pemasangan <s>${rp} ${formatRupiah(pemasangan)}</s>`;
tampilkanDiskon1.textContent = `Diskon ${rp} ${formatRupiah(diskon)}`;   
tampilkanTotal1.textContent = `Total ${rp} ${formatRupiah(total1)}`;

tampilkanPemasangan2.innerHTML = `Pemasangan <s>${rp} ${formatRupiah(pemasangan)}</s>`;
tampilkanDiskon2.textContent = `Diskon ${rp} ${formatRupiah(diskon)}`;   
tampilkanTotal2.textContent = `Total ${rp} ${formatRupiah(total2)}`;

tampilkanPemasangan3.innerHTML = `Pemasangan <s>${rp} ${formatRupiah(pemasangan)}</s>`;
tampilkanDiskon3.textContent = `Diskon ${rp} ${formatRupiah(diskon)}`;   
tampilkanTotal3.textContent = `Total ${rp} ${formatRupiah(total3)}`;

tampilkanPemasangan4.innerHTML = `Pemasangan <s>${rp} ${formatRupiah(pemasangan)}</s>`;
tampilkanDiskon4.textContent = `Diskon ${rp} ${formatRupiah(diskon)}`;   
tampilkanTotal4.textContent = `Total ${rp} ${formatRupiah(total4)}`;

tampilkanPemasangan5.innerHTML = `Pemasangan <s>${rp} ${formatRupiah(pemasangan)}</s>`;
tampilkanDiskon5.textContent = `Diskon ${rp} ${formatRupiah(diskon)}`;   
tampilkanTotal5.textContent = `Total ${rp} ${formatRupiah(total5)}`;
