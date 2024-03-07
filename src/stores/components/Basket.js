import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

function Basket() {
  const totalBasketQuantity = useSelector((state) =>
    state.basket.basket.reduce((sum, item) => sum + item.quantity, 0),
  );
  return (
    <div>
      <Link to="/basket">
        <div className=" flex items-center space-x-1 font-bold">
          Basket
          <span className="mx-1">
            <FaShoppingBasket />
          </span>
          {totalBasketQuantity > 0 && (
            <span className="ml-4 rounded-md bg-orange-500 p-1.5 font-bold">
              {totalBasketQuantity}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Basket;
