import Inventory from "./pages/Inventory/Inventory";
import Warehouse from "./pages/Warehouse/Warehouse";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Inventory />
      <Warehouse />
    </>
  );
}
