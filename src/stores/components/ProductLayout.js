import { useState } from "react";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";

function ProductLayout({ products, productsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * productsPerPage;
  const indexOfFirstItem = indexOfLastItem - productsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / productsPerPage);

  function onPageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container mx-auto">
      <ProductGrid products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ProductLayout;
