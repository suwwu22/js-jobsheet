    // BAGIAN 17 — DOM MANIPULATION

export function renderProducts(products) {
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
}
 