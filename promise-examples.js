// promise-examples.js — Bagian 22
 
// Contoh dasar dari jobsheet
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data berhasil diambil");
  else reject("Terjadi error");
});
 
promise
  .then(result => console.log("then:", result))
  .catch(error => console.error("catch:", error))
  .finally(() => console.log("finally: selesai, apa pun hasilnya"));
 
// ---------------------------------------------
// Contoh kasus gagal, biar kelihatan alur catch-nya
const failingPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) resolve("Berhasil");
  else reject("Gagal mengambil data produk");
});
 
failingPromise
  .then(result => console.log("then:", result))
  .catch(error => console.error("catch:", error))
  .finally(() => console.log("finally: proses kedua selesai"));
 
// ---------------------------------------------
// Simulasi promise dengan delay, seperti request ke server
function delayedFetch(data, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });
}
 
console.log("Mulai mengambil data...");
delayedFetch(["Laptop", "Phone", "Tablet"], 1000)
  .then(data => console.log("Data setelah delay:", data));
 