import Logo from "./Logo";
import NavBar from "./NavBar";
import SeachBar from "./SeachBar";
import { RiMenu2Fill } from "react-icons/ri";

function Header({ query, setQuery, handleSubmit }) {
  return (
    <header className="items-center justify-between border-stone-500 bg-slate-100 px-6 py-3 sm:px-6 md:flex  md:border-b md:shadow-lg">
      <div className="flex items-center justify-start space-x-20">
        <div className="shadow-lg md:hidden">
          <RiMenu2Fill />
        </div>
        <Logo />
      </div>
      <SeachBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

      <NavBar />
    </header>
  );
}

export default Header;
