import HomePage from "./screens/HomePage";
import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./screens/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
