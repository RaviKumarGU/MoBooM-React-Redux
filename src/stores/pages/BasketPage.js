import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";
import EmptyBasket from "../components/EmptyBasket";
import { clearBasket } from "../components/basketSlice";

function BasketPage() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  if (!basket.length) return <EmptyBasket />;
  return (
    <div className="px-4 py-3">
      <Link to="/">
        <span className="underline-offset-5 text-blue-600 underline">
          &larr; Back to menu
        </span>
      </Link>
      <ul className="mt-4 divide-y divide-stone-200 border-b">
        {basket.map((item) => (
          <BasketItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <button className="inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-4">
          Order Items
        </button>
        <button
          className="inline-block rounded-full border-2 border-stone-300 bg-transparent px-4 py-2.5 font-semibold uppercase tracking-wide text-stone-500 transition-colors  duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none disabled:cursor-not-allowed md:px-6 md:py-3.5"
          onClick={() => dispatch(clearBasket())}
        >
          Clear Basket
        </button>
      </div>
    </div>
  );
}

export default BasketPage;
