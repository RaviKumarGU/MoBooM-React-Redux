import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./basketSlice";

function ProductItem({ item }) {
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    image,
    rating: { rate },
  } = item;

  function handleAddToBasket() {
    const newItem = {
      id,
      title,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-2">
      <img className="auto h-48 w-1/2 object-contain" src={image} alt={title} />
      <div className=" line-clamp-2 text-xl font-bold">{title}</div>

      <div className="px-6 pb-2">
        <p className=" text-base text-gray-700">${price}</p>
        <p className="pt-2 text-base text-gray-700">
          Rating:<span className="text-base text-red-600"> {rate}</span>
        </p>
      </div>
      <button
        className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed md:px-5 md:py-2.5"
        onClick={handleAddToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default ProductItem;
