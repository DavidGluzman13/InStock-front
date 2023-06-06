import Inventory from "./pages/Inventory/Inventory";
import Warehouse from "./pages/Warehouse/Warehouse";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Inventory />
      <Warehouse />
    </>
  );
}
