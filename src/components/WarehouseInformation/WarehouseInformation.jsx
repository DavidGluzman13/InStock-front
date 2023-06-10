import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../WarehouseInventoryList/WarehouseInventoryList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WarehouseInformation() {
  const param = useParams();
  const warehouseId = param.id;
  //passing to all children
  const [currentWarehouse, setWarehouse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/warehouses/${warehouseId}`)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [warehouseId]);

  if (!currentWarehouse) {
    return <h1>Loading...</h1>;
  }

  console.log(currentWarehouse);

  return (
    <>
      <WarehouseDetails currentWarehouse={currentWarehouse} />
    </>
  );
}
