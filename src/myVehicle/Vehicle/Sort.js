import React, { useState } from 'react'

function Sort(props) {
    const {setVehicles, vehicles} = props

    const [currentSort, setCurrentSort] = useState("");

    const sortName = ["make", "model", "year", "color", "distanceTravelled", "fuelConsumed", "totalTime", "Fuel Efficiency", "Average Speed"]

    const sortVehicles = () => {
        const sortVehicle = [...vehicles]
        sortVehicle.sort((a, b) => {
          if (currentSort === "Average Speed") {
            if ((a.distanceTravelled / (a.totalTime / 60)) < (b.distanceTravelled / (b.totalTime / 60))) {
              return -1;
            } else if ((a.distanceTravelled / (a.totalTime / 60)) > (b.distanceTravelled / (b.totalTime / 60))) {
              return 1;
            } else {
              return 0;
            }
          }
          else if (currentSort === "Fuel Efficiency") {
            if ((a.distanceTravelled / a.fuelConsumed ) < (b.distanceTravelled / b.fuelConsumed)) {
              return -1;
            } else if ((a.distanceTravelled / a.fuelConsumed ) > (b.distanceTravelled / b.fuelConsumed)) {
              return 1;
            } else {
              return 0;
            }
          } 
          else {
            console.log(currentSort, typeof(currentSort));
            if (a[currentSort] < b[currentSort]) {
              return -1;
            } else if (a[currentSort] > b[currentSort]) {
              return 1;
            } else {
              return 0;
            }
          }
        });
        setVehicles(sortVehicle)
        setCurrentSort("")
      }

      const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        setCurrentSort(value);
      };
    

  return (
    <div className='sortDiv'>
        <select className='sort' value={currentSort} onChange={handleInputChange} >
        <option value="" disabled>
            Select Property
          </option>
          {
            sortName.map((opt, index) => {
              return <option key={index} value={opt}>{opt}</option>
            })
          }
        </select>
        <button onClick={sortVehicles}>Sort Vehicles</button>
      </div>
  )
}

export default Sort