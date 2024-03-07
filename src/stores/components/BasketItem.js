import { useSelector } from "react-redux";
import UpdateItemQuantity from "./UpdatedQuantity";
import DeleteItem from "./DeleteItem";
import { getCurrentQuantity } from "./basketSlice";

function BasketItem({ item }) {
  const { id, title, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantity(id));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {title}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{totalPrice}</p>
        <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
        <DeleteItem itemId={id} />
      </div>
    </li>
  );
}

export default BasketItem;
