function SeachBar({ query, setQuery, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search here... "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="transistion-all mt-4 w-full rounded-full bg-gray-200 px-4 py-2 text-sm duration-300 placeholder:text-gray-500 focus:outline-none sm:mt-0 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SeachBar;
