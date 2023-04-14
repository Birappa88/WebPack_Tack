
import React from "react";
import Analytics from "./Analytics";

function Vehicle(props) {
  const { vehicle, deleteVehicle, editVehicle } = props;

  return (

    <div className="vehicle">
      <h3>{vehicle.make}  {vehicle.model}</h3>
      <p>Year: {vehicle.year}</p>
      <p>Color: {vehicle.color}</p>
      <Analytics vehicleData={vehicle}/>
      <button onClick={() => deleteVehicle(vehicle.id)}>Delete</button>
      <button onClick={() => editVehicle(vehicle.id)}>Edit</button>
    </div>

  );
}

export default Vehicle;
