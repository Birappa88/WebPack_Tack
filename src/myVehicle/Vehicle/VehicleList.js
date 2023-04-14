
import React from "react";
import Vehicle from "./Vehicle";

function VehicleList(props) {
  const { vehicles, deleteVehicle, editVehicle } = props;

  return (
    
    <div className="vehicle-list">
      {vehicles.map((vehicle) => (
        <Vehicle key={vehicle.id} vehicle={vehicle} deleteVehicle={deleteVehicle} editVehicle={editVehicle} />
      ))}
    </div>

  );
}

export default VehicleList;
