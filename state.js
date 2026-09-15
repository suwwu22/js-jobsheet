    // BAGIAN 18 — STATE MANAGEMENT

import { sortProducts } from "./algorithms.js";
import { renderProducts } from "./ui.js";
 
export const state = {
  products: [],
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle" // idle, loading, success, error, empty
};
 
export function render() {
  let result = state.products;
 
  if (state.search) {
    result = result.filter(p =>
      p.title.toLowerCase().includes(state.search.toLowerCase())
    );
  }
 
  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }
 
  if (state.sortBy !== "default") {
    result = sortProducts(result, state.sortBy);
  }
 
  renderProducts(result);
}