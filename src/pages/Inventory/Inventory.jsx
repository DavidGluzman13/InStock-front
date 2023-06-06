import InventoryAdd from "../../components/Inventory Add/InventoryAdd";
import InventoryEdit from "../../components/Inventory Edit/InventoryEdit";
import InventoryItemDetails from "../../components/Inventory Item Details/InventoryItemDetails";
import InventoryList from "../../components/Inventory List/InventoryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Inventory() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/inventory/add" element={<InventoryAdd />} />
        <Route path="/inventory/edit" element={<InventoryEdit />} />
        <Route path="/inventory/:id" element={<InventoryItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
