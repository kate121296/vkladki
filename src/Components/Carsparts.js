import React from 'react';
import './Carsparts.css';

function Carsparts({
    colorsParts={},
                   }) {
    return (
        <div className="car">
          <div
              className="cars-upper-part"
              style={{backgroundColor: colorsParts.cars_upper_part}}
          />
          <div
              className="cars-lower-part"
              style={{backgroundColor: colorsParts.cars_lower_part}}
          />
          <div className="wheels">
              <div
                  className="left-wheel"
                  style={{backgroundColor: colorsParts.left_wheel}}
              />
              <div
                  className="right-wheel"
                  style={{backgroundColor: colorsParts.right_wheel}}
              />
          </div>
        </div>
    );
}

export default Carsparts;


