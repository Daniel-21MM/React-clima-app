import React from 'react'
import Icons from "./Icons";

export default function Card({ values, icon }) {
    return (
        <div className="card">
          {values ? (
            <div className="card-container">
              <h1 className="city-name">{values.name}</h1>
              <p className="temp">{values.main.temp.toFixed(0)}&deg;</p>
              <img className="icon" src={Icons(icon)} alt="icon-weather" />
    
              <div className="card-footer">
                <p className="temp-max-min">
                  {values.main.temp_min.toFixed(0)}&deg; |{" "}
                  {values.main.temp_max.toFixed(0)}&deg;
                </p>
              </div>
            </div>
          ) : (
            <h1>{"Ciudad no encontrada"}</h1>
          )}
        </div>
      );
}
