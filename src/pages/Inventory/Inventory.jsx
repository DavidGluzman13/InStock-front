import InventoryAdd from "../../components/InventoryAdd/InventoryAdd";
import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import InventoryList from "../../components/InventoryList/InventoryList";
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
