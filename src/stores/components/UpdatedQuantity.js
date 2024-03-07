import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./basketSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <button
        className="inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-stone-800  md:px-3.5 md:py-2"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        className="inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-stone-800  md:px-3.5 md:py-2"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
