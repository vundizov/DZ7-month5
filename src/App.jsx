import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout.jsx";
import Products from "./pages/Products.jsx";
import BasketPage from "./pages/BasketPage.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span className="text-2xl">Home Page</span>} />
          <Route path="product" element={<Products />} />
          <Route path="basket" element={<BasketPage />} />
          <Route
            path="*"
            element={<span className="text-2xl">Not found</span>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
