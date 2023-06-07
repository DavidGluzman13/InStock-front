import WarehouseEdit from "../../components/Warehouse Edit/WarehouseEdit";
import WarehouseAdd from "../../components/Warehouse Add/WarehouseAdd";
import WarehouseInformation from "../../components/WarehouseInformation/WarehouseInformation";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

import { Routes, Route } from "react-router-dom";

export default function Warehouse() {
  return (
    <Routes>
      <Route path="/" element={<WarehouseList />} />
      <Route path="/add" element={<WarehouseAdd />} />
      <Route path="/:id/edit" element={<WarehouseEdit />} />
      <Route path="/:id" element={<WarehouseInformation />} />
    </Routes>
  );
}
