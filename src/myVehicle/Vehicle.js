
import React, { useState, useEffect } from "react";
import VehicleForm from "./Vehicle/VehicleForm";
import VehicleList from "./Vehicle/VehicleList";
import Header from "./Vehicle/Header"
import Sort from "./Vehicle/Sort"
import { Link } from "react-router-dom";


const getLocalItem = () => {
  const vehicles = localStorage.getItem("vehicles")
  if (vehicles) {
    console.log(vehicles);
    console.log(JSON.parse(vehicles));
    return JSON.parse(vehicles)
  }
  else {
    return []
  }
}

function Vehicle() {
  const [vehicles, setVehicles] = useState(getLocalItem);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }, [vehicles]);

  const addVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  const deleteVehicle = (id) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(updatedVehicles);
  };

  const editVehicle = (id) => {
    setCurrentId(id);
  };

  
  return (
    <div className="vehicle">
      {/* <Link to="/"> <button className="homebut"> -- Go To Home</button></Link> */}
      <Header />
      <VehicleForm addVehicle={addVehicle} currentId={currentId} vehicles={vehicles} setVehicles={setVehicles} setCurrentId={setCurrentId} />
      <Sort setVehicles={setVehicles} vehicles={vehicles} />
      <VehicleList vehicles={vehicles} deleteVehicle={deleteVehicle} editVehicle={editVehicle} />
    </div>
  );
}

export default Vehicle;
