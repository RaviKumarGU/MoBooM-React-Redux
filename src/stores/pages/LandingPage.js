import { useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

function LandingPage() {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    setQuery(e.target.value);
  }
  return (
    <div>
      <Header query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <Products query={query} />
      <Footer />
    </div>
  );
}

export default LandingPage;
