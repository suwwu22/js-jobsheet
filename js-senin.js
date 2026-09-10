
// BAGIAN 1 

// Latihan 1.1
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

console.log("Latihan 1.1:");
console.log(calculateDiscountedPrice(1000, 10)); // 900

// Latihan 1.2
const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({ ...item, finalPrice });
  }
  return result;
}

console.log("\nLatihan 1.2:");
console.table(applyDiscounts(cart));


// BAGIAN 2 

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

// Latihan 2.1
function findProductById(products, id) {
  return products.find(p => p.id === id);
}

console.log("\nLatihan 2.1:");
console.log(findProductById(products, 2));

// Latihan 2.2
function getLowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}

console.log("\nLatihan 2.2:");
console.table(getLowStockProducts(products));

// Latihan 2.3
function updateStock(products, id, newStock) {
  return products.map(p =>
    p.id === id ? { ...p, stock: newStock } : p
  );
}

console.log("\nLatihan 2.3:");
console.table(updateStock(products, 1, 20));
console.log("Data asli tidak berubah:");
console.table(products);


// BAGIAN 3

const productsNested = [
  {
    id: 1, title: "Laptop", price: 1200, rating: 4.5, stock: 10, category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2, title: "Smartphone", price: 800, rating: 4.2, stock: 15, category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

// 1. Semua tag (belum diratakan)
console.log("\nNested - Semua tag (belum rata):");
console.log(productsNested.map(p => p.tags));

// 2. findProductsByTag
function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}

console.log("\nNested - Cari produk dengan tag 'electronics':");
console.table(findProductsByTag(productsNested, "electronics"));

// 3. Jumlah review per produk
function getReviewCounts(products) {
  return products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
  }));
}

console.log("\nNested - Jumlah review per produk:");
console.table(getReviewCounts(productsNested));

// 4. Review dengan rating 5 dari semua produk
const fiveStarReviews = productsNested.flatMap(p =>
  p.reviews.filter(r => r.rating === 5)
);

console.log("\nNested - Review rating 5:");
console.table(fiveStarReviews);

// 5. Rata-rata rating dihitung manual
function getAverageReviewRating(product) {
  const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / product.reviews.length;
}

console.log("\nNested - Rata-rata rating tiap produk:");
productsNested.forEach(p => {
  console.log(`${p.title}: ${getAverageReviewRating(p)}`);
});

// 6. Produk dengan review terbanyak
function getMostReviewedProduct(products) {
  return products.reduce((max, p) =>
    p.reviews.length > max.reviews.length ? p : max
  );
}

console.log("\nNested - Produk dengan review terbanyak:");
console.log(getMostReviewedProduct(productsNested).title);

// 7. Semua rating dari semua review (rata)
const allRatingsFlat = productsNested.flatMap(p => p.reviews.map(r => r.rating));

console.log("\nNested - Semua rating (rata):");
console.log(allRatingsFlat);


// BAGIAN 4 — FLATTENING DATA

// Latihan 4.1
const allTags = productsNested.flatMap(p => p.tags);

console.log("\nLatihan 4.1 - Semua tags (rata):");
console.log(allTags);

// Latihan 4.2
const allComments = productsNested.flatMap(p => p.reviews.map(r => r.comment));

console.log("\nLatihan 4.2 - Semua comment (rata):");
console.log(allComments);