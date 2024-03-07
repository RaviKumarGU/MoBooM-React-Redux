import Account from "./Account";
import Basket from "./Basket";

function NavBar() {
  return (
    <div class="hidden items-center md:block md:flex md:space-x-4 ">
      <a href="#" class="px-3 py-2 text-stone-500 hover:text-stone-800">
        Store
      </a>
      <a href="#" class="px-3 py-2 text-stone-500 hover:text-stone-800">
        WishList
      </a>
      <Account />
      <Basket />
    </div>
  );
}

export default NavBar;
