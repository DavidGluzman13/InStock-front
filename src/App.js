import Inventory from "./pages/Inventory/Inventory";
import Warehouse from "./pages/Warehouse/Warehouse";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="/warehouses/*" element={<Warehouse />} />
        <Route path="/inventories/*" element={<Inventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
