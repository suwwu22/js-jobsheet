    // BAGIAN 18 — STATE MANAGEMENT

import { sortProducts, caseInsensitiveSearch, getStatistics } from "./algorithms.js";
import { renderProducts, renderStatistics, renderStatus } from "./ui.js";
 
export const state = {
  products: [],
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle" // idle, loading, success, error, empty
};
 
export function render() {
  renderStatus(state.status);
 
  let result = state.products;
 
  if (state.search) {
    result = caseInsensitiveSearch(result, state.search);
  }
 
  if (state.sortBy !== "default") {
    result = sortProducts(result, state.sortBy);
  }
 
   if (state.status === "success" && result.length === 0) {
    state.status = "empty";
    renderStatus(state.status);
  }
 
  renderProducts(result);
  renderStatistics(state.products.length ? getStatistics(state.products) : null);
}