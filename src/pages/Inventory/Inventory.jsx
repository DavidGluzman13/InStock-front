import InventoryAdd from "../../components/Inventory Add/InventoryAdd";
import InventoryEdit from "../../components/Inventory Edit/InventoryEdit";
import InventoryItemDetails from "../../components/Inventory Item Details/InventoryItemDetails";
import InventoryList from "../../components/Inventory List/InventoryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Inventory() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inventories" element={<InventoryList />} />
        <Route path="/inventories/add" element={<InventoryAdd />} />
        <Route path="/inventories/edit" element={<InventoryEdit />} />
        <Route path="/inventories/:id" element={<InventoryItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
