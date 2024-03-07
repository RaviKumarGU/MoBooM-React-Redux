import { Link } from "react-router-dom";

function EmptyBasket() {
  return (
    <div className="px-4 py-3">
      <Link to="/">&larr; Back to menu</Link>

      <p className="mt-7 font-semibold">
        Your basket is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyBasket;
