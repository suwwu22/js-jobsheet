// --- Dari Bagian 1: JS Fundamentals ---
 
export function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
 
export function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({ ...item, finalPrice });
  }
  return result;
}
 
// --- Dari Bagian 2: Data Representation ---
 
export function findProductById(products, id) {
  return products.find(p => p.id === id);
}
 
export function getLowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}
 
export function updateStock(products, id, newStock) {
  return products.map(p =>
    p.id === id ? { ...p, stock: newStock } : p
  );
}
 
// --- Dari Bagian 3: Nested Data ---
 
export function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}
 
export function getReviewCounts(products) {
  return products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
  }));
}
 
export function getAverageReviewRating(product) {
  const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / product.reviews.length;
}
 
export function getMostReviewedProduct(products) {
  return products.reduce((max, p) =>
    p.reviews.length > max.reviews.length ? p : max
  );
}
 
// --- Dari Bagian 4: Flattening Data ---
 
export function getAllTags(products) {
  return products.flatMap(p => p.tags);
}
 
export function getAllComments(products) {
  return products.flatMap(p => p.reviews.map(r => r.comment));
}
 
// --- Dari Bagian 6: Searching ---
 
export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
 
export function binarySearch(arr, target) {
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
 
export function bubbleSort(numbers) {
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
 
export function sortProducts(products, sortBy) {
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
 
export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}
 
export function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}
 
export function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}
 
// --- Dari Bagian 5 (logika awal), direfactor pakai ES6+ di Bagian 20 ---
 
export function getStatistics(products) {
  const prices = products.map(({ price }) => price); // destructuring di parameter
  const ratings = products.map(p => p.rating ?? 0);   // nullish coalescing, default 0 kalau rating gaada
  const { length: totalProducts } = products;         // destructuring dari products.length
 
  return {
    totalProducts,
    averagePrice: prices.reduce((a, b) => a + b, 0) / prices.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock: products.reduce((sum, { stock }) => sum + stock, 0), // destructuring di parameter reduce
    averageRating: ratings.reduce((a, b) => a + b, 0) / ratings.length
  };
}
 
export class Stack {
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
 
export class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
 