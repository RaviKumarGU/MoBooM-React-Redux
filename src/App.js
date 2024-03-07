import "./App.css";
import AccountPage from "./stores/pages/AccountPage";
import BasketPage from "./stores/pages/BasketPage";
import LandingPage from "./stores/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
