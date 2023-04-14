
import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

function VehicleForm(props) {
    const { addVehicle, currentId, vehicles, setVehicles, setCurrentId } = props
    const [indexx, setIndexx] = useState("")
    const [vehicleData, setVehicleData] = useState({ make: "", model: "", year: "", color: "", fuelConsumed: "", distanceTravelled: "", totalTime: "" })
    // const [error, setError] = useState({ make: "", model: "", year: "", color: "", fuelConsumed: "", distanceTravelled: "", totalTime: "" })

    const handleSubmit = (e) => {
        e.preventDefault();

        // let iserror = false

        // if (vehicleData.make == "") {
        //     iserror = true
        //     setError({
        //         ...error,
        //         make: "Please provide Make"
        //     })
        //     console.log(iserror, error);
        // }
        // if (vehicleData.model == undefined) {
        //     iserror = true
        //     setError({
        //         ...error,
        //         model: "Please provide Model"
        //     })
        // }
        // if (vehicleData.year == undefined || vehicleData.year < 1800 || vehicleData.year > 2024) {
        //     iserror = true
        //     setError({
        //         ...error,
        //         year: "Please provide proper Year, It should be between 1800 & 2024"
        //     })
        // }
        // if (vehicleData.color == undefined) {
        //     iserror = true
        //     setError({
        //         ...error,
        //         color: "Please provide Color"
        //     })
        // }
        // if (vehicleData.fuelConsumed == undefined || typeof (vehicleData.fuelConsumed) !== "number") {
        //     iserror = true
        //     setError({
        //         ...error,
        //         fuelConsumed: "Please provide proper Fuel Consumed, it should be in Number"
        //     })
        // }
        // if (vehicleData.distanceTravelled == undefined || typeof (vehicleData.distanceTravelled) !== "number") {
        //     iserror = true
        //     setError({
        //         ...error,
        //         distanceTravelled: "Please provide proper Distance Travelled, it should be in Number"
        //     })
        // }
        // if (vehicleData.totalTime == undefined || typeof (vehicleData.totalTime) !== "number") {
        //     iserror = true
        //     setError({
        //         ...error,
        //         totalTime: "Please provide proper Total Time, it should be in Number"
        //     })
        // }


        // if (!iserror) {
            if (!currentId) {
                const vehicle = {
                    id: uuid(),
                    make: vehicleData.make,
                    model: vehicleData.model,
                    year: vehicleData.year,
                    color: vehicleData.color,
                    fuelConsumed: vehicleData.fuelConsumed,
                    distanceTravelled: vehicleData.distanceTravelled,
                    totalTime: vehicleData.totalTime
                };
                addVehicle(vehicle);
            } else {
                const vehicle = {
                    id: currentId,
                    make: vehicleData.make,
                    model: vehicleData.model,
                    year: vehicleData.year,
                    color: vehicleData.color,
                    fuelConsumed: vehicleData.fuelConsumed,
                    distanceTravelled: vehicleData.distanceTravelled,
                    totalTime: vehicleData.totalTime
                };
                const edited = [...vehicles];
                edited.splice(indexx, 1, vehicle);
                setVehicles(edited);
                setCurrentId("");
            }
            setVehicleData({ make: "", model: "", year: "", color: "", fuelConsumed: "", distanceTravelled: "", totalTime: "" });
        // }
    };

    useEffect(() => {
        if (currentId) {
            vehicles.forEach((vehicle, ind) => {
                if (vehicle.id === currentId) {
                    setIndexx(ind)
                }
            })
            const vehi = vehicles.filter((vehicle) => currentId === vehicle.id)
            setVehicleData(vehi[0])
        }
    }, [currentId])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="make">Make:</label>
                <input
                    type="text"
                    id="make"
                    value={vehicleData.make}
                    onChange={(e) => setVehicleData({ ...vehicleData, make: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    value={vehicleData.model}
                    onChange={(e) => setVehicleData({ ...vehicleData, model: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    id="year"
                    value={vehicleData.year}
                    onChange={(e) => setVehicleData({ ...vehicleData, year: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    value={vehicleData.color}
                    onChange={(e) => setVehicleData({ ...vehicleData, color: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="fuelConsumed">Fuel Consumed:</label>
                <input
                    type="number"
                    id="fuelConsumed"
                    value={vehicleData.fuelConsumed}
                    onChange={(e) => setVehicleData({ ...vehicleData, fuelConsumed: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="distanceTravelled">Distance Travelled:</label>
                <input
                    type="number"
                    id="distanceTravelled"
                    value={vehicleData.distanceTravelled}
                    onChange={(e) => setVehicleData({ ...vehicleData, distanceTravelled: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="totalTime">Total Time:</label>
                <input
                    type="number"
                    id="totalTime"
                    value={vehicleData.totalTime}
                    onChange={(e) => setVehicleData({ ...vehicleData, totalTime: e.target.value })}
                />
            </div>
            <button type="submit">{currentId ? "Update" : "Save"}</button>
        </form >
    );
}


export default VehicleForm;




