export function renderStatistics(stats) {
  const el = document.querySelector("#statistics");
  if (!stats) {
    el.innerHTML = "";
    return;
  }
  el.innerHTML = `
    <p>Total Produk: ${stats.totalProducts}</p>
    <p>Rata-rata Harga: $${stats.averagePrice.toFixed(2)}</p>
    <p>Harga Tertinggi: $${stats.highestPrice}</p>
    <p>Harga Terendah: $${stats.lowestPrice}</p>
    <p>Total Stok: ${stats.totalStock}</p>
    <p>Rata-rata Rating: ${stats.averageRating.toFixed(2)}</p>
  `;
}
 
export function renderStatus(status) {
  const el = document.querySelector("#status-message");
  const messages = {
    loading: "Memuat data...",
    error: "Gagal memuat data. Coba lagi nanti.",
    empty: "Tidak ada produk.",
    idle: "",
    success: ""
  };
  el.textContent = messages[status] ?? "";
}
 
  const container = document.querySelector("#product-list");
  container.innerHTML = "";
 
  if (products.length === 0) {
    container.innerHTML = "<p>Tidak ada produk ditemukan.</p>";
    return;
  }
 
  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating ?? "-"}</p>
    `;
    container.append(card);
  }

 