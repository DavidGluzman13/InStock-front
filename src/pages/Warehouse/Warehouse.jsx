import WarehouseEdit from "../../components/Warehouse Edit/WarehouseEdit";
import WarehouseAdd from "../../components/Warehouse Add/WarehouseAdd";
import WarehouseInformation from "../../components/Warehouse Information/WarehouseInformation";
import WarehouseList from "../../components/Warehouse List/WarehouseList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Inventory() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouse/add" element={<WarehouseAdd />} />
          <Route path="/warehouse/edit" element={<WarehouseEdit />} />
          <Route path="/warehouse/:id" element={<WarehouseInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
