import { useEffect, useState } from "react";
import ProductLayout from "./ProductLayout";

function Products({ query }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw Error("Failed getting products");
      const data = await res.json();
      setProducts(data);
      const uniqueCategories = [
        ...new Set(...[data.map((product) => product.category)]),
      ];
      setCategories(["All", ...uniqueCategories]);
    }
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === selectedCategory,
    );
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto">
      <div className="flex">
        <select
          className="w-46 mb-6 mt-10 rounded-md border-gray-300 p-2
          shadow-sm focus:border-blue-400 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {!query && (
        <ProductLayout
          products={selectedCategory === "All" ? products : filteredProducts}
          productsPerPage={10}
        />
      )}
      {query && (
        <ProductLayout
          products={products.filter((val) =>
            val.title.toLowerCase().includes(query.toLowerCase()),
          )}
          productsPerPage={10}
        />
      )}
    </div>
  );
}

export default Products;
