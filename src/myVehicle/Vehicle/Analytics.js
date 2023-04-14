import React from "react";

function Analytics(props) {
  const { vehicleData } = props;

  const calculateFuelEfficiency = () => {
    if (vehicleData.fuelConsumed && vehicleData.distanceTravelled) {
      return vehicleData.distanceTravelled / vehicleData.fuelConsumed;
    }
    return 0;
  };

  const calculateAverageSpeed = () => {
    if (vehicleData.totalTime && vehicleData.distanceTravelled) {
      return vehicleData.distanceTravelled / (vehicleData.totalTime / 60);
    }
    return 0;
  };

  return (

    <div className="analytics">
      <h2>Vehicle Analytics</h2>
      <p>
        Fuel Efficiency: <strong>{calculateFuelEfficiency().toFixed(2)}</strong> km/L
      </p>
      <p>
        Average Speed: <strong>{calculateAverageSpeed().toFixed(2)}</strong> km/h
      </p>
    </div>
    
  );
}

export default Analytics;
