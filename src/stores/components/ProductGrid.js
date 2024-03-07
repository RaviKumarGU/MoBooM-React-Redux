import ProductItem from "./ProductItem";

function ProductGrid({ products }) {
  return (
    <div>
      <div className="mt-10 grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-3 md:gap-6">
        {products.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
