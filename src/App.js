import Inventory from "./pages/Inventory/Inventory";
import Warehouse from "./pages/Warehouse/Warehouse";
import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/warehouses" />} />
        <Route path="/warehouses/*" element={<Warehouse />} />
        <Route path="/inventories/*" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}
