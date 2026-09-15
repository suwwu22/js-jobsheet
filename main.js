import { fetchProducts } from "./api.js";
import { state, render } from "./state.js";
import { dummyProducts } from "./data.js";
 
async function loadProducts() {
  state.status = "loading";
  render();
 
  try {
    // pakai data dummy dulu untuk testing tanpa internet;
    // ganti ke fetchProducts() kalau mau ambil data asli dari DummyJSON
    state.products = dummyProducts;
    // state.products = await fetchProducts();
    state.status = "success";
  } catch (error) {
    state.status = "error";
    console.error(error);
  } finally {
    render();
  }
}
 
// Bagian 19: Event Handling
document.querySelector("#search-input").addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});
 
document.querySelector("#category-select").addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});
 
document.querySelector("#sort-select").addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});
 
loadProducts();
 