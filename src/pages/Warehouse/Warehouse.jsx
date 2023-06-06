import WarehouseEdit from "../../components/Warehouse Edit/WarehouseEdit";
import WarehouseAdd from "../../components/Warehouse Add/WarehouseAdd";
import WarehouseInformation from "../../components/Warehouse Information/WarehouseInformation";
import WarehouseList from "../../components/Warehouse List/WarehouseList";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Warehouse() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />
          <Route path="/warehouses" element={<WarehouseList />} />
          <Route path="/warehouses/add" element={<WarehouseAdd />} />
          <Route path="/warehouses/edit" element={<WarehouseEdit />} />
          <Route path="/warehouses/:id" element={<WarehouseInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
