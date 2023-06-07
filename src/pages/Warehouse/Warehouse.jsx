import WarehouseEdit from "../../components/WarehouseEdit/WarehouseEdit";
import WarehouseAdd from "../../components/WarehouseAdd/WarehouseAdd";
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
