import WarehouseEdit from "../../components/Warehouse Edit/WarehouseEdit";
import WarehouseAdd from "../../components/Warehouse Add/WarehouseAdd";
import WarehouseInformation from "../../components/Warehouse Information/WarehouseInformation";
import WarehouseList from "../../components/Warehouse List/WarehouseList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Warehouse() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouses/add" element={<WarehouseAdd />} />
          <Route path="/warehouses/edit" element={<WarehouseEdit />} />
          <Route path="/warehouses/:id" element={<WarehouseInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
