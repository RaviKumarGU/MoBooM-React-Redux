import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <Link
        to="/account"
        className="px-3 py-2 text-stone-500 hover:text-stone-800"
      >
        Account
      </Link>
    </div>
  );
}

export default Account;
