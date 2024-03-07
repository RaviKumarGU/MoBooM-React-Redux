import { useDispatch } from "react-redux";
import { deleteItem } from "./basketSlice";

function DeleteItem({ itemId }) {
  const dispatch = useDispatch();

  return (
    <button
      className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed md:px-5 md:py-2.5 md:text-xs"
      onClick={() => dispatch(deleteItem(itemId))}
    >
      Delete
    </button>
  );
}

export default DeleteItem;
