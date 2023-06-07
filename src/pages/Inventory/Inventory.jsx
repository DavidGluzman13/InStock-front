import InventoryAdd from "../../components/Inventory Add/InventoryAdd";
import InventoryEdit from "../../components/Inventory Edit/InventoryEdit";
import InventoryItemDetails from "../../components/Inventory Item Details/InventoryItemDetails";
import InventoryList from "../../components/Inventory List/InventoryList";
import { Routes, Route } from "react-router-dom";

export default function Inventory() {
  return (
    <Routes>
      <Route path="/" element={<InventoryList />} />
      <Route path="/add" element={<InventoryAdd />} />
      <Route path="/:id/edit" element={<InventoryEdit />} />
      <Route path="/:id" element={<InventoryItemDetails />} />
    </Routes>
  );
}
