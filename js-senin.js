// BAGIAN 1 — JS FUNDAMENTALS

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


// BAGIAN 2 — DATA REPRESENTATION

const products = [
  { id: 1, title: "Laptop Pro 14", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone X", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Wireless Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Laptop Air 13", price: 999, category: "laptops", stock: 8 },
  { id: 5, title: "Smartphone Lite", price: 450, category: "phones", stock: 22 },
  { id: 6, title: "Bluetooth Speaker", price: 60, category: "audio", stock: 18 },
  { id: 7, title: "Gaming Laptop 16", price: 1800, category: "laptops", stock: 2 },
  { id: 8, title: "Smartphone Ultra", price: 1100, category: "phones", stock: 6 },
  { id: 9, title: "Earbuds Pro", price: 150, category: "audio", stock: 30 },
  { id: 10, title: "Tablet 10 inch", price: 400, category: "tablets", stock: 12 },
  { id: 11, title: "Tablet Mini", price: 300, category: "tablets", stock: 4 },
  { id: 12, title: "Smartwatch Series 5", price: 250, category: "wearables", stock: 9 },
  { id: 13, title: "Fitness Band", price: 50, category: "wearables", stock: 40 },
  { id: 14, title: "Mechanical Keyboard", price: 80, category: "accessories", stock: 17 },
  { id: 15, title: "Wireless Mouse", price: 25, category: "accessories", stock: 50 },
  { id: 16, title: "USB-C Hub", price: 35, category: "accessories", stock: 25 },
  { id: 17, title: "4K Monitor 27 inch", price: 350, category: "monitors", stock: 7 },
  { id: 18, title: "Ultrawide Monitor 34 inch", price: 700, category: "monitors", stock: 3 },
  { id: 19, title: "Action Camera", price: 220, category: "cameras", stock: 11 },
  { id: 20, title: "Mirrorless Camera", price: 900, category: "cameras", stock: 5 },
  { id: 21, title: "DSLR Camera", price: 1300, category: "cameras", stock: 2 },
  { id: 22, title: "Portable SSD 1TB", price: 90, category: "storage", stock: 20 },
  { id: 23, title: "External HDD 2TB", price: 70, category: "storage", stock: 28 },
  { id: 24, title: "Router AX3000", price: 120, category: "networking", stock: 14 },
  { id: 25, title: "Mesh WiFi System", price: 200, category: "networking", stock: 6 },
  { id: 26, title: "Smart Bulb", price: 20, category: "smart-home", stock: 60 },
  { id: 27, title: "Smart Plug", price: 15, category: "smart-home", stock: 45 },
  { id: 28, title: "Robot Vacuum", price: 500, category: "smart-home", stock: 4 },
  { id: 29, title: "Portable Projector", price: 380, category: "electronics", stock: 9 },
  { id: 30, title: "Power Bank 20000mAh", price: 45, category: "electronics", stock: 33 }
];

// Latihan 2.1
function findProductById(products, id) {
  return products.find(p => p.id === id);
}

console.log("\nLatihan 2.1:");
console.log(findProductById(products, 7));

// Latihan 2.2
function getLowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}

console.log("\nLatihan 2.2 (stok < 10):");
console.table(getLowStockProducts(products));

// Latihan 2.3
function updateStock(products, id, newStock) {
  return products.map(p =>
    p.id === id ? { ...p, stock: newStock } : p
  );
}

console.log("\nLatihan 2.3 (update stok id 1 jadi 20):");
console.table(updateStock(products, 1, 20).filter(p => p.id === 1));
console.log("Data asli tidak berubah (id 1 masih stok lama):");
console.table(products.filter(p => p.id === 1));


// BAGIAN 3 — NESTED DATA

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

// BAGIAN 5 — MAP, FILTER, REDUCE

// Latihan 5.1 - rata-rata harga kategori "laptops"
const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);
const avgLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

console.log("Latihan 5.1 - Rata-rata harga laptop:");
console.log(avgLaptopPrice);

// Latihan 5.2 - getStatistics
function getStatistics(products) {
  const prices = products.map(p => p.price);
  const ratings = products.filter(p => p.rating).map(p => p.rating); // aman kalau belum ada field rating

  return {
    totalProducts: products.length,
    averagePrice: prices.reduce((a, b) => a + b, 0) / prices.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock: products.reduce((sum, p) => sum + p.stock, 0),
    averageRating: ratings.length
      ? ratings.reduce((a, b) => a + b, 0) / ratings.length
      : null
  };
}

console.log("\nLatihan 5.2 - Statistik produk:");
console.log(getStatistics(products));


// BAGIAN 6 — LINEAR SEARCH

// Latihan 6.1 - linear search generik
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

console.log("\nLatihan 6.1 - Linear search angka 5 di [3,7,5,1]:");
console.log(linearSearch([3, 7, 5, 1], 5)); // 2

// Latihan 6.2 - cari produk berdasarkan id, pola linear search
function linearSearchProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) return products[i];
  }
  return undefined;
}

console.log("\nLatihan 6.2 - Cari produk id 9 (linear search manual):");
console.log(linearSearchProductById(products, 9));


// BAGIAN 7 — BINARY SEARCH

// Latihan 7.1 - binary search generik (array angka, harus sudah terurut)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const sortedNumbers = [1, 3, 5, 7, 9, 11, 13];
console.log("\nLatihan 7.1 - Binary search angka 9:");
console.log(binarySearch(sortedNumbers, 9)); // index 4

// Latihan 7.2 - binary search produk berdasarkan price (harus di-sort dulu)
function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return undefined;
}

const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

console.log("\nLatihan 7.2 - Binary search produk harga 350:");
console.log(binarySearchByPrice(sortedByPrice, 350));


// BAGIAN 8 — SORTING

// Sorting bawaan (contoh, hati-hati sort() memutasi array asli)
const numbers = [5, 3, 8, 1];
console.log("\nSort bawaan ascending:", [...numbers].sort((a, b) => a - b));
console.log("Sort bawaan descending:", [...numbers].sort((a, b) => b - a));

// Latihan 8.1 - bubble sort manual, tanpa mutasi
function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("\nLatihan 8.1 - Bubble sort [5,3,8,1]:");
console.log(bubbleSort([5, 3, 8, 1]));

// Latihan 8.2 - sortProducts dengan beberapa opsi
function sortProducts(products, sortBy) {
  const arr = [...products];
  switch (sortBy) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    case "title":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr;
  }
}

console.log("\nLatihan 8.2 - Sort produk by price-asc (5 teratas):");
console.table(sortProducts(products, "price-asc").slice(0, 5));

console.log("\nLatihan 8.2 - Sort produk by title (5 teratas):");
console.table(sortProducts(products, "title").slice(0, 5));

// BAGIAN 9 — GROUPING & AGGREGATION

// Latihan 9.1 - group by category
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

const grouped = groupByCategory(products);
console.log("Latihan 9.1 - Grouping by category:");
console.log(grouped);

// Latihan 9.2 - ringkasan jumlah produk per kategori
console.log("\nLatihan 9.2 - Ringkasan jumlah produk per kategori:");
Object.entries(grouped).forEach(([category, items]) => {
  console.log(`${category}: ${items.length} produk`);
});


// BAGIAN 10 — FREQUENCY COUNTING

// Latihan 10.1 - frequency counter generik
function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];
console.log("\nLatihan 10.1 - Frequency count kata:");
console.log(countFrequency(words));

// Latihan 10.2 - terapkan ke data produk
console.log("\nLatihan 10.2 - Frequency count category:");
console.log(countFrequency(products.map(p => p.category)));

// kalau field rating belum ada di dataset, ini akan kosong -
// nanti tinggal dipakai kalau dataset sudah punya rating
const roundedRatings = products
  .filter(p => p.rating)
  .map(p => Math.round(p.rating));
console.log("\nLatihan 10.2 - Frequency count rating (dibulatkan):");
console.log(countFrequency(roundedRatings));


// BAGIAN 11 — SET

// Latihan 11.1 - unique category, brand, tags
const uniqueCategories = [...new Set(products.map(p => p.category))];
console.log("\nLatihan 11.1 - Unique categories:");
console.log(uniqueCategories);

// contoh kalau nanti ada field tags di tiap produk (pakai productsNested dulu)
const uniqueTags = [...new Set(productsNested.flatMap(p => p.tags))];
console.log("\nLatihan 11.1 - Unique tags (dari productsNested):");
console.log(uniqueTags);


// BAGIAN 12 — MAP (STRUKTUR DATA)

// Latihan 12.1 - buildProductLookup
function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

const productLookup = buildProductLookup(products);
console.log("\nLatihan 12.1 - Lookup produk id 10 pakai Map:");
console.log(productLookup.get(10));


// BAGIAN 13 — STACK (LIFO)

// Latihan 13.1 - implementasi Stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

console.log("\nLatihan 13.1 - Testing class Stack:");
const testStack = new Stack();
testStack.push("A");
testStack.push("B");
testStack.push("C");
console.log("Peek:", testStack.peek()); // C
console.log("Pop:", testStack.pop());   // C
console.log("Peek setelah pop:", testStack.peek()); // B

// Latihan 13.2 - search history pakai Stack + fitur undo search
const searchHistory = new Stack();

function search(keyword) {
  searchHistory.push(keyword);
  console.log(`Mencari: "${keyword}"`);
}

function undoSearch() {
  const removed = searchHistory.pop();
  const previous = searchHistory.peek();
  console.log(`Undo dari "${removed}", kembali ke: "${previous ?? "(kosong)"}"`);
  return previous;
}

console.log("\nLatihan 13.2 - Search history:");
search("laptop");
search("phone");
search("tablet");
undoSearch(); // dari tablet, balik ke phone
undoSearch(); // dari phone, balik ke laptopp